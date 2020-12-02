
export default class URLManager {

    public static BasePath = "https://rallycoding.herokuapp.com/api/";

    protected static getBasePath() {
        return URLManager.BasePath;
    }

    public getMusicData(): string {
        return URLManager.getBasePath() + "music_albums";
    }


}