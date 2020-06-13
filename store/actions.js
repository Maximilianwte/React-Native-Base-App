export const addPost = post => ({
    type: "ADD_POST",
    payload: post
})

export const changeModuleState = bool => ({
    type: "CHANGE_MODULE_STATE",
    payload: bool
})

export const changeMood = mood => ({
    type: "CHANGE_MOOD",
    payload: mood
})

export const handleTags = tag => ({
    type: "HANDLE_TAGS",
    payload: tag
})