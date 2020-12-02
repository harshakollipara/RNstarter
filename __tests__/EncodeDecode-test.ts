
import 'react-native';
import UtilityManager from '../src/utility/UtilityManager'

it("it can Encode and decode", () => {
    const encodeResponse=UtilityManager.base64EncodeDecodeInstance.encode('capgemini');
    expect(encodeResponse).toEqual('Y2FwZ2VtaW5p')
    const decodeResponse=UtilityManager.base64EncodeDecodeInstance.decode('Y2FwZ2VtaW5p');
    expect(decodeResponse).toEqual('capgemini')
    
    });
