type Cache = Record<string, string>;

export class ClientRouter {
  private appContainerId: string;
  private pageCache: Cache;
  private hostname: string;

  constructor(appContainerId: string, hostname?: string) {
    this.appContainerId = appContainerId;
    this.pageCache = {};
    this.hostname = hostname || window.location.hostname;

    // Bind event listeners
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handlePopState = this.handlePopState.bind(this);

    // Initialize router
    this.init();
  }

  /**
   * Initialize the router by setting up event listeners and loading the initial content.
   */
  private init(): void {
    document.addEventListener("click", this.handleLinkClick);
    window.addEventListener("popstate", this.handlePopState);

    // Load initial content
    this.loadContent(window.location.pathname);
  }

  /**
   * Handle navigation for relative links or links matching the hostname.
   * @param event MouseEvent
   */
  private handleLinkClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (target && target.matches("[data-link]")) {
      event.preventDefault();
      const href = (target as HTMLAnchorElement).href;
      const url = new URL(href);

      // Only handle internal links (relative or matching the hostname)
      if (url.origin === window.location.origin || url.hostname === this.hostname) {
        this.navigateTo(url.pathname);
      }
    }
  }

  /**
   * Handle browser back/forward navigation events.
   */
  private handlePopState(): void {
    this.loadContent(window.location.pathname);
  }

  /**
   * Navigate to a new URL and load the corresponding content.
   * @param path string
   */
  private navigateTo(path: string): void {
    history.pushState(null, "", path);
    this.loadContent(path);
  }

  /**
   * Load content for the given path and inject it into the app container.
   * @param path string
   */
  private async loadContent(path: string): Promise<void> {
    const appContainer = document.getElementById(this.appContainerId);

    if (!appContainer) {
      console.error(`App container with ID "${this.appContainerId}" not found.`);
      return;
    }

    if (this.pageCache[path]) {
      // Load from cache
      appContainer.innerHTML = this.pageCache[path];
      return;
    }

    try {
      const response = await fetch(path === "/" ? "/index.html" : path);
      if (!response.ok) throw new Error(`Failed to load content for ${path}`);

      const content = await response.text();
      this.pageCache[path] = content; // Cache the loaded content
      appContainer.innerHTML = content;
    } catch (error) {
      console.error("Error loading content:", error);
      appContainer.innerHTML = "<h1>404 - Page Not Found</h1>";
    }
  }
}


