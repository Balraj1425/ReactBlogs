import { useState } from 'react';
import '../home/home.css'
const Contactus = () => {
  const [status, setStatus] = useState('');
  const sendForm = () => {
    setStatus('Form submitted!');  
    setDataSubmitted(true);
  }
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [dataSubmitted, setDataSubmitted] = useState(false);
  
  return (
    <div className="container">
        <div className='row'>
        <div className='col-md-3 col-sm-3'>  &nbsp; &nbsp; </div>
        <div className=' col-md-6 col-sm-6'> 
            <div className="contact-wrapper">
                <h3>contact us</h3>
                <div className="input-wrapper">
                    <label>Email</label>
                    <input type='email' className="form-control" name='email' value={email} onChange={event => setEmail(event.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <label>Subject</label>
                    <input type='text' className="form-control" name="subject" value={subject} onChange={event => setSubject(event.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <label>Message</label>
                    <textarea className='form-control' name='message' value={message} onChange={event => setMessage(event.target.value)}/>
                </div>
                <button className='btn btn-success' onClick={sendForm}>Send</button>
                <div className={!dataSubmitted?'hidden': undefined}>
                  <p>{status}</p>
                  Email : {email}<br/>
                  Subject : {subject}<br/>
                  Message : {message}
                </div>
        </div>
      </div>
      <div className='col-md-3 col-sm-3'></div>
      </div>
    </div>
  );
};
export default Contactus;
