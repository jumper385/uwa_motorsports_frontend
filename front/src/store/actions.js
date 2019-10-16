export const AddMember = ({name, position, quote}) => ({
    type:"ADD_MEMBER",
    content = {
        name:name,
        position:position,
        quote:quote,
    },
})