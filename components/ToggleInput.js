export default function ToggleInput({ onChange, value }) {
    
    return (
        <div className="toggle-switch">
        <label>
            <input checked={value} type='checkbox' onChange={onChange}/>
            <span className='slider'></span>
        </label>
        </div>
    )
}