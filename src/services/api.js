import axios from 'axios';


const changeColor = async (color) => {
  await axios.put('http://shalom-demo.cleverapps.io/color', color, {
    headers: {
      'Content-Type': 'text/plain'
    }
  })
}

module.exports = changeColor;
