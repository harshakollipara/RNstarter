
import UtilityManager from '../src/Utility/UtilityManager';
import 'react-native';
it('Api Call test case',async function (){
    globalThis.fetch=jest.fn().mockImplementation(function( callback:any){
        return new Promise((resolve,reject)=>{
            resolve({
                json:function(){
                  return  [
                      {"title":"Taylor Swift",
                      "artist":"Taylor Swift",
                      "url":"https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
                    }]
                }
            })
            reject({
                error:function(){
                    return false;
                }
            })
        })
    })    
     UtilityManager.restApiClientInstance.invokeGetRequest('/posts' ,{}, null).then((res:any)=>{
       let getResponse=res[0].title;     
       expect(getResponse).toEqual('Taylor Swift');
  })
    UtilityManager.restApiClientInstance.invokeGetRequest('/posts' ,{}, null).then((res:any)=>{
    let postResponse=res[0].title;
    expect(postResponse).toEqual('Taylor Swift');
})
})