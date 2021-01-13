import React, {useState, useEffect} from 'react';

const Upload = () => {

    const [image, setImage] = useState({});

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("image", this.state.image)
        fetch(`http://localhost:3000/images`, {
            method: "POST",
            body: form
        })
    }

        return (
            <div className="form">
                <h1>New Upload</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type="file" name="image" onChange={this.onChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )    
};

export default Upload;