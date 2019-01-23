export function GetText(value){debugger
    return({
        type: "Get_text",
        payload: value
    });
}
export function GetSuggestion(text){
    return({
        type: "Get_suggestion",
        payload: text
    });
}