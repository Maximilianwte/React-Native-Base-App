export const addPost = post => ({
    type: "ADD_POST",
    payload: post
})

export const changeModuleState = bool => ({
    type: "CHANGE_MODULE_STATE",
    payload: bool
})