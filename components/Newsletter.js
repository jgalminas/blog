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

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: email.trim() })
    })

    const data = await res.json();

    data && setLoading(false);

    if (res.ok) {
      setButton({value:'Subscribed!', class: 'success'});
    } else if (data.code === 'duplicate_parameter') {
      setButton({value:'Subscribe', class: ''});
      setErrorMessage('This email is already subscribed.');
    } else {
      setButton({value:'Subscribe', class: ''});
      setErrorMessage('An error occured, please try again.');
    }
  }

  return (
    <div className="newsletter">
        
          <div className='__big-circle'></div>
          <div className='__medium-circle'></div>
          <div className='__small-circle'></div>

        <div className="__container">

        <h2 className="newsletter__heading"> Newsletter </h2>

        <h3 className="__message"> Subscribe to my newsletter to receive notifications when new articles are released! </h3>

        <form onSubmit={(e) => {e.preventDefault(); subscribe(email);}}>

            <label className="invisible-label" htmlFor="input"> email </label>
            <div className="__email-container">
              <Email className='__email-icon'/>
              <input required id="input" type="email" value={email}
              onChange={(e) => { setEmail(e.target.value); setButton({value:'Subscribe', class: ''}) }}
              />
            </div>

            <input disabled={loading} className={button.class} id="button" type="submit" value={button.value}/>
        </form>

        <p align="middle" className="__error-message"> { errorMessage } </p>

        </div>


    </div>
  )
}
