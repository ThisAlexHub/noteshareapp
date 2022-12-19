function Main() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="text">
                    <ul className="row button-list">
                        <li className="col-6"><a href="/create" type=" button" className="btn btn-primary">Create note</a></li>
                        <li className="col-6"><a href="/note" type=" button" className="btn btn-primary">See note</a></li>
                    </ul>
                </div>
                
                <div className="text">
                <p><b>ShareNotes</b> – note sharing service. Create a note, send a link and your friend will be able to view it.
                The note will be deleted after viewing (or 15 minutes after creation).</p>
                    <p>How to create a note? </p>
                    <ul>
                        <li>Click create note</li>
                        <li>Type something and click create button</li>
                        <li>Send generated address to your friend</li>
                    </ul>
                    <p>How to view a note? Go to the URL or type your address.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;