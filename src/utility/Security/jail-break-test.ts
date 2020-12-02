import JailMonkey from 'jail-monkey';

export default class JailBreakTest {

   isJailBroken() {
      return JailMonkey.isJailBroken()
   }
}