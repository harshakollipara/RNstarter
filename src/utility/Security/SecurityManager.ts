
export default class SecurityManager {
    private keyStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    public constructor() {

    }

    public async getEncodedData(dataToEncode: string) {
        await this.encodeString(dataToEncode);
    }
    

    /**
     * @param dataToEncode 
     */
    private encodeString<T>(dataToEncode: string): Promise<string> {
        return new Promise((resolve) => {
            var output = '';
            var chr1: number;
            var chr2: number;
            var chr3: number;

            var enc1: number;
            var enc2: number;
            var enc3: number;
            var enc4: number;
            var i = 0;

            do {
                chr1 = dataToEncode.charCodeAt(i++);
                chr2 = dataToEncode.charCodeAt(i++);
                chr3 = dataToEncode.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output =
                    output +
                    this.keyStr.charAt(enc1) +
                    this.keyStr.charAt(enc2) +
                    this.keyStr.charAt(enc3) +
                    this.keyStr.charAt(enc4);
                //chr1 = chr2 = chr3 = '';
                //enc1 = enc2 = enc3 = enc4 = '';
            } while (i < dataToEncode.length);

            resolve(output);
        }

        )
    };
}