


function validIP(arr) {

  if ((arr.length > 0) && (arr.length < 5)) {


    if ((arr[0] >= 0) && (arr[0] <= 255) && (arr[1] >= 0) && (arr[1] <= 255) && (arr[2] >= 0) && (arr[2] <= 255) && (arr[3] >= 0) && (arr[3] <= 255)) {
      console.log('Vaild IP part');
    }

    else {
      console.log('NOT a Vaild IP part');

    }
  }
  else {
    console.log('This is not an IP address format, IP address has to have 4 part');
  }
}
validIP(prompt("Enter IP ADDRESS"));

