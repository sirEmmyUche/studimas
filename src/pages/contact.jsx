import { useState } from 'react';

function Contact(){
    const [formData, setFormData] = useState({email:"",fname:"",lname:"",message:"",phone:""});
    const [feedback, setFeedback] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false);
        
    const submitUserDetails = async ()=>{
        try{
            const sendData = await fetch("https://formspree.io/f/mwkdlbyq",{
                    method:"post", 
                    headers:{'Accept': 'application/json'},
                    body: JSON.stringify(formData)
                })
                const res = await sendData.json()
                if(res.ok == true){
                    setFeedback("Thank you")
                }else{
                    setFeedback("Sorry, there was an error!")
                }
            }catch(err){console.log(err)}
    }

    const user = (event)=>{
        setFormData((prev)=>{
            { return {...prev,[event.target.name]:event.target.value}}
        })
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setIsSubmitting(true);
        submitUserDetails();
    }

    return(
        <div id='main-contact-pg-container'>
            <div id="contact-pg">
                <h1>New to Studimas, Not sure where to start?</h1>
                <h3>Chat with a studimas Advisor Today</h3>
                <h6>Send us a message and have a studimas Advisor reach out to schedule a call</h6>
                {!feedback?<form className="form-bg" onSubmit={handleSubmit}>
                    <div className='form-div'>
                        <label className="single-form" htmlFor="text">
                            <input type="text"
                            id='text'
                            name='fname'
                            required
                            value={formData.fname}
                            onChange={user}
                            placeholder="First Name"/>
                            <span className="placeholder-text">First Name</span>
                        </label>

                        <label className="single-form" htmlFor="text">
                            <input type="text"
                            id='text'
                            name='lname'
                            required
                            value={formData.lname}
                            onChange={user}
                            placeholder="Last Name"/>
                            <span className="placeholder-text">last Name</span>
                        </label>
                    </div>

                    <div className='form-div'>
                        <label className="single-form" htmlFor="email">
                            <input type="email"
                            id="email"
                            name='email'
                            required
                            value={formData.email}
                            onChange={user}
                            placeholder="example@gmail.com"/>
                            <span className="placeholder-text">Email</span>
                        </label>

                        <label className="single-form">
                            <input type="text"
                            id='Phone'
                            name='phone'
                            required
                            value={formData.phone}
                            onChange={user}
                            placeholder="(xxx)-xxxx xxxx"/>
                            <span className="placeholder-text">Phone Number</span>
                        </label>
                    </div>

                    <label className="single-form">
                        <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={user}
                        placeholder="leave a message"/>
                        <span className="placeholder-text">message</span>
                    </label>
                    <div className="contact-pg-submit-btn">
                        <button type="submit" onSubmit={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
                :
                <div>
                    <h1>{feedback}</h1>
                </div>
                }
            </div>
        </div>
    )
}

export default Contact