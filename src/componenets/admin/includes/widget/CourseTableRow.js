import React from 'react'

export default function CourseTableRow() {
    return (
        <tr className=" card-panel p-2">
            <td>
            
                <p>
                <label>
                    <input type="checkbox" />
                    <span>1</span>
                </label>
                </p>
            </td>
            <td>Financial marketing</td>
            <td>Competently underwhelm strategic e-markets...</td>
            <td>Emeka Doe</td>
            <td>
                <span>
                    <button className="btn-flat transparent">
                        <img src="assets/svg/bin.svg" alt="" />
                    </button>
                    <button className="btn-flat transparent">
                        <img src="assets/svg/edit.svg" alt="" />
                    </button>
                </span>
            </td>
        </tr>
    )
}
