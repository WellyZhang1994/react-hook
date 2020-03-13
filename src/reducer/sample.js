export const getBasicInfo = (state = [], action) => {
    switch(action.type){
        case "SAMPLE":
            return  ["World!"];
        default:
            return ["Hello!"];
    }
}