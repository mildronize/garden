import { LogLevel } from "./utils/logger";

export const config = {
  /**
   * Log level for the application
   * 
   * - Local development uses "debug" log level
   * - Production uses "info" log level
   */
  logLevel: "info" as LogLevel,
}

