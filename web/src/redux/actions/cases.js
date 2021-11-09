import { v4 as uuidv4 } from 'uuid'; // for unique ids

// add expense 

export const addCase  = ({   
    title ='',
    description = '',
    court = '',
} = {}
) => ({
    type : 'ADD_CASE',
    case : {
        id : uuidv4(),
        title,
        description,
        court
    }
})

// remove expense 
export const removeCase = ({id} = {}) => ({
    type: 'REMOVE_CASE',
    id
})

// edit expense 
export const editCase = (id,updates) => (
    {
        type: 'EDIT_CASE',
        id,
        updates
    }
)