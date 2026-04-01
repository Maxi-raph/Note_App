import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const NoteList = ({notes,deleteNote}) => {
    return ( <div className="mt-6">
        { notes.length > 0 ? <div  className="space-y-4">
            {
            notes.map((note) =>{
            return(
            <div key={note.id} className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${note.priority == 'High'?'border-l-red-500':note.priority == 'Medium'?'border-l-green-500':'border-l-orange-500'}`}>
                <h3 className="text-lg font-bold mb-1">{note.title}</h3>
                <p className="text-sm text-gray-600"><strong>Category: </strong>{note.category}</p>
                <p className="text-sm text-gray-600"><strong>Priority: </strong>{note.priority}</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Description: </strong>{note.description}</p>
                <FontAwesomeIcon icon={faTrash} className='text-purple-400 mt-2 cursor-pointer' onClick={()=>deleteNote(note.id)}/>
            </div>
            )
        })}
        </div>:<p className="text-center text-gray-500">No Notes Yet</p>}
    </div>);
}
 
export default NoteList;