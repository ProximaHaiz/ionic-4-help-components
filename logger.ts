export class MyLogger {
  private logPrefix = '';

  constructor(logPrefix?: string) {
    if (logPrefix) {
      this.logPrefix = `[${logPrefix}]: `;
    }
  }

  get log(): Function {
    if (!isDebug) {
      return () => {
      };
    }
    return this._log('log');
  }

  get info(): Function {
    if (!isDebug) {
      return () => {
      };
    }
    return this._log('info');
  }

  get warn(): Function {
    if (!isDebug) {
      return () => {
      };
    }
    return this._log('warn');
  }


  get debug(): Function {
    if (!isDebug) {
      return () => {
      };
    }
    return this._log('debug');
  }

  get error(): Function {
    if (!isDebug) {
      return () => {
      };
    }
    return this._log('error');
  }

  get dir(): Function {
    if (!isDebug) {
      return () => {
      };
    }
    const logPrefix = this.logPrefix;
    if (logPrefix.length) {
      return console.dir.bind(window.console, logPrefix);
    } else {
      return console.dir.bind(window.console);
    }
  }


  set setLogPrefix(val) {
    this.logPrefix = val;
  }

  private getCurrentDate() {
    const dt = new Date();
    let month = (dt.getMonth() + 1).toString().padStart(2, '0');
    let date = dt.getDate().toString().padStart(2, '0');
    let year = dt.getFullYear().toString().padStart(4, '0');
    let hours = dt.getHours().toString().padStart(2, '0');
    let minutes = dt.getMinutes().toString().padStart(2, '0');
    let seconds = dt.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  }

  private _log(type: string) {
    return console[type].bind(window.console,
      `%c[${type.toLocaleUpperCase()}] %c| %c${this.getCurrentDate()} %c| %c${this.logPrefix}`,
      `color: ${AppConfig.myLoggerColors[type]}; font-size: 14px; width: 200px`,
      '',
      'color: lightgray',
      '',
      `color: ${AppConfig.myLoggerColors[type]}; font-size: 14px; background-color:#ffffff`, name);
  }

}
