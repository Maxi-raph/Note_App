const SelectInput = ({name,label,value,onChange,required=false,options}) => {
    return ( <>
        <div className="mb-4">
            <label htmlFor={name} className='block font-semibold'>{label}</label>
            <select 
            name={name} 
            type="text"
             value={value}
             onChange={onChange}
             className="w-full p-2 bg-gray-300 border rounded-lg ">
                {options.map((opt,i) =><option key={i} value={opt.value}>{opt.value}</option>)}
             </select>
        </div>
    </> );
}
 
export default SelectInput;