import AsyncStorage from '@react-native-community/async-storage';
import UtilityManager from '../UtilityManager';

  export class SessionManagement {

    public login(username: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => { 
            resolve(true);
        })

    }

    public saveJWT(jwt: string) {
        this.storeData("jwtToken",jwt)
    }

    public logout() {
        this.storeData("jwtToken",null)
    }

    public  validateSessionOffline = async () =>{
        const value = await this.getData("jwtToken")
        const isOffline = this.isBlank(value);
        return isOffline;
    }


    private isBlank(str:string):boolean {
        if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g,"") === "")
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    private storeData = async (key:any, value:any) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
        } catch (err) {
            UtilityManager.consoleLogInstance.printConsoleLog('Error in setting Item',err)
        }
    }


    private getData = async (key:any) => {
        try {
          const value = await AsyncStorage.getItem(key)
          if(value !== null) {
              return JSON.parse(value)
          }
        } catch(err) {
            UtilityManager.consoleLogInstance.printConsoleLog('Error in getting Item',err)
        }
      }
}
