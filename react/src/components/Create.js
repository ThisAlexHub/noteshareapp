import React from 'react';
import { useState } from 'react';
import env from '../env.json'

function Create() {

    const [formClass, setFormClass] = useState();
    const [lineClass, setLineClass] = useState('hide');
    const [url, setUrl] = useState('');

    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj),
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                // setText(response);
                if (response.result) {
                    setUrl(env.url + response.url);
                }
            });
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Fill fields');
            return false;
        }
        sendData({ "note": note });
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="text">
                    <form action="" onSubmit={loadDataFromForm} className={formClass}>
                        <div className="form-group">
                            <label htmlFor="note">Enter your note</label>
                            <textarea name="note" className="form-control" defaultValue="Test note system" id="note"></textarea>
                            <p> The max length of note is 1000 symbols</p>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-primary">Create</button>
                        </div>
                        
                    </form>
                    <div className={lineClass}>
                        <div className="alert alert-primary" role="alert">{url}</div>
                         <p>Copy your URL and send it to your friend. Attention. You can view it only once.</p>
                        <div className="text-right"><button onClick={function () { window.location.reload() }} className="btn btn-primary">Create another note</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;