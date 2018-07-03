import axios from 'axios';


const changeColor = async (color) => {
  await axios.put('http://shalom-demo.cleverapps.io/color', colorToString(color), {
    headers: {
      'Content-Type': 'text/plain'
    }
  })
}

const colorToString = (color) => {
  return color['r'].toString().padStart(3, '0') +
    color['g'].toString().padStart(3, '0') +
    color['b'].toString().padStart(3, '0');
}

module.exports = changeColor;
