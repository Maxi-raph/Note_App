import NoteForm from "./NoteForm";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

const ToggleFormOpen = ({notes,setNotes}) => {
const [toggle,setToggle] = useState(false)
    return ( <div>
    <button className="text-center font-semibold text-xl w-full bg-gray-100 text-purple-800 border border-gray-300 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4" onClick={()=>setToggle(!toggle)}>{!toggle?'Add New Note':'Hide Form'} <FontAwesomeIcon icon={!toggle?faPlus:faXmark} /></button>
    <NoteForm toggle={toggle} notes={notes} setNotes={setNotes}/>
    </div>);
}
 
export default ToggleFormOpen;