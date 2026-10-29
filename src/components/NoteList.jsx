import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { PinButton } from './pinButton'
const NoteList = ({notes, deleteNote, isPinned, togglePin}) => {

    const sortedNotes = [...notes].sort((a, b) => {
    const aPinned = isPinned(a.id)
    const bPinned = isPinned(b.id)
    if (aPinned !== bPinned) return aPinned ? -1 : 1  
     return 0    
    })

    return ( <div className="mt-6">
        { sortedNotes.length > 0 ? <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
            sortedNotes.map((note) =>{
            return(
            <div key={note.id} className={`flex p-4 bg-white rounded-lg shadow-md border-l-4 ${note.priority == 'High'?'border-l-red-500':note.priority == 'Medium'?'border-l-green-500':'border-l-orange-500'}`}>
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-1">{note.title}</h3>
                    <p className="text-sm text-gray-600"><strong>Category: </strong>{note.category}</p>
                    <p className="text-sm text-gray-600"><strong>Priority: </strong>{note.priority}</p>
                    <p className="text-sm text-gray-600 mt-2"><strong>Description: </strong>{note.description}</p>
                    <FontAwesomeIcon icon={faTrash} className='text-purple-400 mt-2 cursor-pointer' onClick={()=>deleteNote(note.id)}/>
                </div>
                <div className="flex flex-1 justify-end items-start">
                    <PinButton isPinned={isPinned(note.id)} onToggle={()=> togglePin(note.id)}/>
                </div>
            </div>
            )
        })}
        </div>:<p className="text-center text-gray-500">No Notes Yet</p>}
    </div>);
}
 
export default NoteList;