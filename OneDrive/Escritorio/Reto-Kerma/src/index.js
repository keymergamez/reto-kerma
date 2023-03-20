// const fs = require('fs');
// const dicomParser = require('dicom-parser');

// const dicomImgs = [
//   "5a542570-2881-41bf-b953-ca2fbacb371d.dcm", "7fba110f-08c7-4167-8bfa-0a01f239e257.dcm", "297a03dc-c86a-4892-8f10-f37bcfc7a00a.dcm", "481430ab-6429-4416-94c2-498dcda37347.dcm", "06646980-c307-4926-8d77-b2bb7c86457e.dcm", "06646980-c307-4926-8d77-b2bb7c86457e.dcm",
// ]

// const data= dicomImgs.map(Item=> {
//   const dicomData = fs.readFileSync(`.//src/img/${Item}`);
//   const dataSet = dicomParser.parseDicom(dicomData);

//   const patientName = dataSet.string('x00100010');
//   const studyDate = dataSet.string('x00080020');

//   return {
//     patientName,
//     studyDate
//   }
// })
const data = [
  {
    patientName: 'Calc-Test_P_00038_RIGHT_CC_1',
    studyDate: '20170829',
  },
  { patientName: 'P_00038^P_00038', studyDate: '20170829' },
  {
    patientName: 'Calc-Test_P_00460_LEFT_MLO_1',
    studyDate: '20170829',
  },
  { patientName: 'P100', studyDate: '20030702' },
  { patientName: 'Pancreas-CT-CB_001', studyDate: '20120706' },
];

function displayInfo(data){

  let containerBox

  for (let i = 0; i < data.length; i++) {
    containerBox = document.createElement('div');
    containerBox.className= 'container-box';
    containerBox.insertAdjacentHTML('beforeend', '<span>Radioterapia</span>');
    containerBox.insertAdjacentHTML('beforeend', '<div class="wrapper-details"><div class="details"> Nombre de la Estructura: '+data[i].patientName+' </div> <div class="details"> Dosis Minima: '+data[i].studyDate+' </div> </div>');
    containerBox.insertAdjacentHTML('beforeend', '</div>');
    const container = document.querySelector(".container");;
    container.insertAdjacentElement("afterbegin", containerBox);
  }

}
displayInfo(data)





