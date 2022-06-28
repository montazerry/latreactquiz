import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        title: "",
        status: ""
    });

    const { title, status } = form;

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });


    }


    return (
        <div className='container mt-4'>
            <form onSubmit={() => alert(title, status)}>
                <div className="form-group">
                    <label> Title</label>
                    <input
                        name='title'
                        value={title}
                        onChange={(e) => onChange(e)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className="form-group">
                    <label> Title</label>
                    <select
                        name='status'
                        value={status}
                        onChange={(e) => onChange(e)}
                        className='form-control'
                    >
                        <option value="" disabled> Select Status</option>
                        <option value="done" > Done</option>
                        <option value="notDone" >Note Done</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className='btn btn-primary btn-block' >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form