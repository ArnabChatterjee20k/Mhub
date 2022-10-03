import { getLanguage } from "./getLanguage";

export default function filters(){
    return [
        {name:"Dubbing Language",option:"language" , values:getLanguage()},
        {name:"Movie Language",option:"with_original_language" , values:getLanguage()}
    ]
}