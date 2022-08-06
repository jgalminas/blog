export default function ToggleInput({ onChange, value }) {
    
    return (
        <div className="toggle-switch">
        <label>
            <input defaultChecked={value} type='checkbox' onClick={onChange}/>
            <span className='slider'></span>
        </label>
        </div>
    )
}