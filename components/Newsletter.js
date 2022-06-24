export default function Newsletter() {
  return (
    <div className="newsletter">

        <h2 id="heading"> Newsletter </h2>

        <div id="container">

        <h3 id="message"> Subscribe to my newsletter to receive notifications when new articles are released! </h3>

        <form>
            <input id="input" type="email" placeholder="enter your email"/>
            <input id="button" type="submit" value="Subscribe"/>
        </form>

        </div>


    </div>
  )
}
