import React from "react" 

function ContactPage(){
    return (
        <>
        <form>
        <div className="container">
            <div className="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="" />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
            <br />
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    </form> 
        </>
    )
}

export default ContactPage;