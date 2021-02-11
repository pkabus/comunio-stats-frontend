import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input text="text" />
//         </div>
//     )
// }

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input text="text" ref={ref} />
        </div>
    )
})

export default FRInput
