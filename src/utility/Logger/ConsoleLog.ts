export default class ConsoleLog {
    private showConsoleLog: boolean = true;

    /**
     * @param showConsoleLog 
     */
    public setShowConsoleLog(showConsoleLog: boolean) {
        this.showConsoleLog = showConsoleLog
    }

    public getShowConsoleLog() {
        return this.showConsoleLog;
    }

    /**
     * @param consoleMessageHeader 
     * @param consoleMessageData 
     */
    public printConsoleLog(consoleMessage: string, consoleData: any) {
        if (this.getShowConsoleLog()) {
            console.log(consoleMessage, consoleData);
        }
    }

}