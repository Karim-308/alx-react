import { Seq } from 'immutable';

export default function printBestStudents(object) {

  const seq = Seq(object);


  const chosen = seq.filter((student) => student.score > 70);

  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const result = chosen.toJS();
  
  Object.keys(result).forEach((key) => {
    result[key].firstName = capFirstLetter(result[key].firstName);
    result[key].lastName = capFirstLetter(result[key].lastName);
  });

  console.log(result);
}
