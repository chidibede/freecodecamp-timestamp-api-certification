module.exports = function getUtcDate(dateObj) {
    let month_array = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let day_array = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    let year = dateObj.getFullYear();
    let month = month_array[dateObj.getMonth()];
    let day = day_array[dateObj.getDay()];
    let hours = dateObj.getHours();
    let mins = dateObj.getMinutes()
    if (mins < 10){
      mins = '0' + mins
    } else{
      mins= ''+mins
    }
    let seconds = dateObj.getSeconds();
    if (seconds < 10){
      seconds = '0' + seconds
    } else{
      seconds= ''+seconds
    }
    let date = dateObj.getDate();
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    let utc = `${day}, ${date} ${month} ${year} ${hours}:${mins}:${seconds} ${timeZone}`;
    return utc;
  };
  
 