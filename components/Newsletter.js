import { useState } from "react";
import Email from '../public/email.svg';

export default function Newsletter() {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [button, setButton] = useState({ value:'Subscribe', class: '' });
  
  async function subscribe(email) {
    setErrorMessage();
    setLoading(true);
    setButton({value: 'Loading..', class: 'loading'});

    try {

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: email.trim() })
    })
    
    const data = await res.json();

    if (res.ok) {
      setButton({value:'Subscribed!', class: 'success'});
    } else if (data.code === 'duplicate_parameter') {
      setButton({value:'Subscribe', class: ''});
      setErrorMessage('This email is already subscribed.');
    }

  } catch(err) {
    setButton({value:'Subscribe', class: ''});
    setErrorMessage('An error occured, please try again.');
  }

  setLoading(false);

}

  return (
    <div className="newsletter">
        
          <div className='big-circle'></div>
          <div className='medium-circle'></div>
          <div className='small-circle'></div>

        <div className="newsletter__container">

        <h2 className="newsletter__heading"> Newsletter </h2>

        <h3 className="newsletter__message"> Subscribe to my newsletter to receive notifications when new articles are released! </h3>

        <form onSubmit={(e) => {e.preventDefault(); subscribe(email);}}>

            <label className="invisible-label" htmlFor="input"> email </label>
            <div className="email-container">
              <Email className='email-icon'/>
              <input required id="input" type="email" value={email}
              onChange={(e) => { setEmail(e.target.value); setButton({value:'Subscribe', class: ''}); setErrorMessage("")}}
              />
            </div>

            <input disabled={loading} className={button.class} id="button" type="submit" value={button.value}/>
        </form>

        <p align="middle" className="newsletter__error-message"> { errorMessage } </p>

        </div>


    </div>
  )
}
