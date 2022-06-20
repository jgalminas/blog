export function getFormattedDate(dateString) {

    //date format must be as such: yyyy-mm-dd

    let dayString = "";
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const date =  new Date (dateString);
    const day = date.getDate();

    if (day === 1) {
      dayString = `${day}st`;
    } else if (day === 2) {
      dayString = `${day}nd`;
    } else if (day === 3) {
      dayString = `${day}rd`;
    } else {
      dayString = `${day}th`;
    }

    return `${months[date.getMonth()]} ${dayString}, ${date.getFullYear()}`;

  } 