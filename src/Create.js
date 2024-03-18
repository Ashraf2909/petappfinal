import React from "react";

function Create() {
    return (
        <div className="form-container">
            <form>
                <div className="addnewblog">
                    <h2>Add a New Blog</h2>
                </div>
                <div>
                    <label for="title">Title:</label>
                    <input type="text" name="title" placeholder="Write Title"></input>
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input
                        type="text"
                        name="desc"
                        placeholder="Write Description"
                    ></input>
                </div>
                <div className="file">
                    <label for="file">Input File:
                        <input type="file" name="file" placeholder="File"></input>
                    </label>
                </div>
                <button className="newblog-btn">Submit</button>
            </form>
        </div>
    );
}

export default Create;