const TextInput = ({name,label,value,onChange,required=false}) => {
    return ( <> 
        <div className="mb-4">
            <label htmlFor={name} className='block font-semibold'>{label}</label>
            <input 
            name={name}
            type="text"
             value={value}
             onChange={onChange}
             className="w-full p-2 bg-gray-300 border rounded-lg " />
        </div>
    </> );
}
 
export default TextInput;