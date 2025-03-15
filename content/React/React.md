## React Template 
[React Template: Redux Toolkits + Router + Starter Structure](https://github.com/mildronize/finance-assistant/commit/a16c1e341f44352a28531850d995d7c93b449470) (year 2021)
```
components - shared components between pages features - redux slice, including service - Duck style app - app & global redux reducer pages - Domain-driven development - A page can compose of many one-time-use components.
```

Redux Toolkit: [https://dev.to/markerikson/comment/1g0p9](https://dev.to/markerikson/comment/1g0p9)


[[State Management]]

---


Practical React Query

[https://tkdodo.eu/blog/practical-react-query](https://tkdodo.eu/blog/practical-react-query)

While typing checking form validity only one time. ( timeout: 500ms) — Deboucing

```ts
useEffect(() => {
  const identifier = setTimeout(() => {
    console.log('Checking form validity!');
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, 500);

  return () => {
    console.log('CLEANUP');
    clearTimeout(identifier);
  };
}, [enteredEmail, enteredPassword]);

```
# React Project Structure

## Scalable React

- Nx Framework (Yarn Alternative)
    
    [https://www.youtube.com/watch?v=Lr-u2ALSEQg](https://www.youtube.com/watch?v=Lr-u2ALSEQg)
    
    .**Monorepo** — A single repo containing multiple projects (Enterprise approach)
    
    # Link
    
    [https://github.com/nrwl/nx](https://github.com/nrwl/nx)
    
- Microsoft To-Do - React
    
    [How We React at Microsoft - Alex Migutsky](https://www.youtube.com/watch?v=CWxc3AYja1I&t=74s)
    
    **Code: [https://github.com/mr-mig/todomvc-icc**](https://github.com/mr-mig/todomvc-icc**)
    
    **Slide: [http://slides.com/mr-mig/microsoft-to-do-23**](http://slides.com/mr-mig/microsoft-to-do-23**)
    
    **Stack**
    
    - Redux
    - Redux-actions
    - Reselect
    - ImmutableJS
    
    **Design Principles**
    
    - Data-Driven Design
    - Immutable Design
    - Composable abstractions
    - Domain Driven Design
    - Prioritized Changeability
    - Explicitness
    
    ### Passing state vs. ICC
    

### Valuable Link

- [React Conferences by GitNation — Youtube](https://www.youtube.com/c/ReactConferences)
    
- [React & Redux in TypeScript - Complete Guide](https://github.com/piotrwitek/react-redux-typescript-guide)
    
    - [MS Frontend Bootcamp & Fluent UI](https://github.com/microsoft/frontend-bootcamp)
- [https://github.com/markerikson/react-redux-links](https://github.com/markerikson/react-redux-links)
    

### Component

- Material UI
    
- Windtail UI [https://github.com/estevanmaito/windmill-react-ui](https://github.com/estevanmaito/windmill-react-ui)
    
- [https://github.com/elastic/eui](https://github.com/elastic/eui)
    
- Fluent UI
    
    @fluentui
    
    **OneNote — Third Party**
    
    [https://c1-onenote-15.cdn.office.net/o/s/161421741013_App_Scripts/TPN/thirdPartyNotices.html](https://c1-onenote-15.cdn.office.net/o/s/161421741013_App_Scripts/TPN/thirdPartyNotices.html)
    
    [OneNote Lib](https://www.notion.so/OneNote-Lib-a26e18fa93fb4a6e876f986eb46eb068?pvs=21)
    
    [MS Todo 2.47.2](https://www.notion.so/MS-Todo-2-47-2-284a129f26714aebbbdee5540edcfabc?pvs=21)
    

### **Offline**

- Dexie —> IndexDB

### Database in Client

- normalizr — Nested JSON
- [redux-ORM](https://github.com/redux-orm/redux-orm)
- Ref: [https://hackernoon.com/shape-your-redux-store-like-your-database-98faa4754fd5](https://hackernoon.com/shape-your-redux-store-like-your-database-98faa4754fd5)

### Redux

- Redux: Normalizing API Responses with normalizr: [https://egghead.io/lessons/javascript-redux-normalizing-api-responses-with-normalizr](https://egghead.io/lessons/javascript-redux-normalizing-api-responses-with-normalizr)

### Practice with React ICC [Microsoft To-Do - React](https://www.notion.so/Microsoft-To-Do-React-799d3d4cfff54b83b5c6fe9deab8162b?pvs=21)

- Create project `todomvc-reduxorm-icc`
- Use modern approach of Redux
- Use `Redux-ORM` instead of existing approach

---

Awesome Component

- Drag n Drop - [https://github.com/clauderic/dnd-kit](https://github.com/clauderic/dnd-kit)

Case Study

- MS Word 365
    
    [http://hammerjs.github.io/](http://hammerjs.github.io/)
    
    [https://github.com/wilsonpage/fastdom/](https://github.com/wilsonpage/fastdom/)
    
    @azure/ms-rest-js 1.9.1
    
    @babel/runtime 7.14.0
    
    @emotion/hash 0.8.0
    
    @fluentui/date-time-utilities 8.2.2
    
    tslib 2.3.1
    
    @fluentui/dom-utilities 2.1.3
    
    @fluentui/font-icons-mdl2 8.1.9
    
    @fluentui/foundation-legacy 8.1.9
    
    @fluentui/keyboard-key 0.3.4
    
    @fluentui/make-styles 9.0.0-alpha.30
    
    @fluentui/merge-styles 8.1.4
    
    @fluentui/react-button 9.0.0-alpha.72
    
    @fluentui/react-file-type-icons 8.2.0
    
    @fluentui/react-focus 8.1.11
    
    @fluentui/react-hooks 8.2.7
    
    @fluentui/react-make-styles 9.0.0-alpha.57
    
    @fluentui/react-shared-contexts 9.0.0-alpha.21
    
    @fluentui/react-stylesheets 1.0.0-beta.5
    
    @fluentui/react-tabster 9.0.0-alpha.51
    
    @fluentui/react-theme-provider 1.0.0-beta.21
    
    @fluentui/react-theme 0.3.1
    
    @fluentui/react-utilities 9.0.0-alpha.39
    
    @fluentui/react-utils 0.3.0
    
    @fluentui/react-window-provider 2.1.3
    
    @fluentui/react 8.29.1
    
    @fluentui/set-version 8.1.4
    
    @fluentui/style-utilities 8.3.0
    
    @fluentui/theme 2.1.4
    
    @fluentui/utilities 8.3.0
    
    @microsoft/load-themed-styles 1.10.146
    
    react-redux 7.2.2
    
    core-js 2.6.11
    
    @uifabric/foundation 7.10.0
    
    @uifabric/icons 7.6.0
    
    @uifabric/merge-styles 7.19.2
    
    @uifabric/react-hooks 7.14.0
    
    @uifabric/set-version 7.0.24
    
    @uifabric/styling 7.19.1
    
    @uifabric/utilities 7.33.5
    
    css-in-js-utils 2.0.1
    
    react-pdf 4.2.0
    
    css-loader 3.6.0
    
    dom-helpers 3.4.0
    
    ext 1.4.0
    
    fast-memoize 2.5.2
    
    fbjs 0.8.17
    
    glamor 2.20.40
    
    hoist-non-react-statics 3.3.2
    
    hyphenate-style-name 1.0.4
    
    inline-style-expand-shorthand 1.2.0
    
    inline-style-prefixer 3.0.8
    
    invariant 2.2.4
    
    just-curry-it 3.1.0
    
    keyborg 0.7.1
    
    lodash-es 4.17.15
    
    lodash 4.17.21
    
    make-cancellable-promise 1.0.0
    
    make-event-props 1.2.0
    
    merge-class-names 1.3.0
    
    mobx-react-lite 2.2.2
    
    mobx-react 6.3.1
    
    mobx-safe 1.2.2
    
    mobx 4.15.7
    
    node-libs-browser 2.2.1
    
    object-assign 4.1.1
    
    office-ui-fabric-react 7.176.1
    
    @fluentui/date-time-utilities 7.9.1
    
    @fluentui/react-focus 7.18.0
    
    pdfjs-dist 2.1.266
    
    prop-types 15.7.2
    
    re-resizable 6.5.5
    
    react-dom 16.14.0
    
    react-is 16.13.1
    
    react-lifecycles-compat 3.0.4
    
    react-loadable 5.5.0
    
    react-redux 5.1.2
    
    react-transition-group 2.9.0
    
    react 16.14.0
    
    reduce-reducers 0.4.3
    
    redux-actions 2.6.5
    
    redux-thunk 2.3.0
    
    redux 4.0.5
    
    regenerator-runtime 0.13.7
    
    reselect 4.0.0
    
    resize-observer-polyfill 1.5.1
    
    rtl-css-js 1.14.1
    
    scheduler 0.19.1
    
    stylis 4.0.10
    
    symbol-observable 1.2.0
    
    tabster 0.7.4
    
    tslib 1.13.0
    
    uuid 3.4.0
    
    webpack 4.31.0
    
    toposort 1.0.7
    
    quill 1.3.7
    

### Admin

- [https://www.youtube.com/watch?v=aTPkos3LKi8&t=4175s](https://www.youtube.com/watch?v=aTPkos3LKi8&t=4175s)
- [https://www.youtube.com/watch?v=HRmdj-HpJyE](https://www.youtube.com/watch?v=HRmdj-HpJyE)

### Admin Project Example

- [https://github.com/FiretableProject/firetable/](https://github.com/FiretableProject/firetable/)
    - Related Articles
        - [https://betterprogramming.pub/we-refactored-10k-lines-of-code-in-our-open-source-react-project-5eb844cccf28](https://betterprogramming.pub/we-refactored-10k-lines-of-code-in-our-open-source-react-project-5eb844cccf28)

Material UI

- [https://www.youtube.com/watch?v=vyJU9efvUtQ](https://www.youtube.com/watch?v=vyJU9efvUtQ)
- [https://youtu.be/m-2_gb_3L7Q](https://youtu.be/m-2_gb_3L7Q)

Figma

- [https://www.youtube.com/watch?v=4W4LvJnNegA](https://www.youtube.com/watch?v=4W4LvJnNegA)
- [https://www.youtube.com/watch?v=0JCUH5daCCE](https://www.youtube.com/watch?v=0JCUH5daCCE)

React

- [https://www.youtube.com/watch?v=zT62eVxShsY&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=3](https://www.youtube.com/watch?v=zT62eVxShsY&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=3)

TypeScript

[https://betterprogramming.pub/top-5-typescript-features-you-should-master-2358db9ab3d5](https://betterprogramming.pub/top-5-typescript-features-you-should-master-2358db9ab3d5)

[https://betterprogramming.pub/getting-strict-with-typescript-2e906b48c0a](https://betterprogramming.pub/getting-strict-with-typescript-2e906b48c0a)

[https://betterprogramming.pub/typescript-4-1s-advanced-mapped-types-eba9a2ba7a9](https://betterprogramming.pub/typescript-4-1s-advanced-mapped-types-eba9a2ba7a9)

[https://betterprogramming.pub/master-typescripts-type-guards-1fd5436bc6f2](https://betterprogramming.pub/master-typescripts-type-guards-1fd5436bc6f2)