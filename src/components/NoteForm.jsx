
import {useState} from 'react'
import TextInput from './Inputs/TextInput'
import SelectInput from './Inputs/SelectInput'
import TextAreaInput from './Inputs/TextAreaInput'

const NoteForm = ({toggle,notes,setNotes}) => {
    const [formData,setFormData] = useState({title:'',priority:'Medium',category:'Work',description:''})
    const handleChange = (e)=>{
        const capitalizedValue = e.target.value.slice(0,1).toUpperCase() + e.target.value.slice(1) 
        setFormData({
        ...formData,
        [e.target.name]:capitalizedValue
       })
    }
    const handleSubmit = (e)=>{   
        e.preventDefault()
        if(!formData.title || !formData.description)return;
        const newNote = {id:Date.now(), ...formData}
        setNotes([...notes,newNote])
        setFormData({title:'',priority:'Medium',category:'Work',description:''})
    }

    if(!toggle) return
    return ( <form className='mb-6 '>
        <TextInput 
         name = 'title'
         label='Title'
         value={formData.title}
         onChange={(e)=>handleChange(e)}
         required
        />
        <SelectInput 
         name = 'priority'
         label='Priority'
         value={formData.priority}
         onChange={(e)=>handleChange(e)}
         options = {[{value:'High'},{value:'Medium'},{value:'Low'}]}
         required
        />
        <SelectInput 
         name = 'category'
         label='Category'
         value={formData.category}
         onChange={(e)=>handleChange(e)}
         options = {[{value:'Work'},{value:'Personal'},{value:'Ideas'}]}
         required
        />
        <TextAreaInput 
         name = 'description'
         label='Description'
         value={formData.description}
         onChange={(e)=>handleChange(e)}    
         required   
        />
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600" onClick={(e)=>handleSubmit(e)}>Add Note</button>
    </form> );
}
 
export default NoteForm;