
export default function HighlightedMessage({ color, text }) {

  // colors -> red, grey

  return (
    <div className={`highlighted-message ${color}`}> 
        <div> ! </div>
        <p> { text } </p>
    </div>
  )
}
