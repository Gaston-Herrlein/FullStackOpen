const Notification = ({ message, styleError }) => {
    if (message === null) {
      return null
    }
    
    console.log (message);
    return (
      <div style={styleError}>
        {message}
      </div>
    )
}

export default Notification