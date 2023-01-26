export const modelJSON = {
  //account
  patientName: '',
  mobileNo: '',

  //appointment
  clinicLocation: '',
  consultation: '',
  cosmeticConsultation: '',
  specialist: '',
  consultationDate: new Date(),

  //personal
  fatherName: '',
  panelName: '',
  age: new Date(),
  gender: '',
  maritalStatus: '',
  source: '',
  occupation: '',

  //contact
  email: '',
  adhaar: '',
  zipCode: '',
  state: '',
  citizenship: '',
  city: '',
  country: '',
  address: '',

  //medical history
  medicalDiagnosis: '',
  bloodGroup: '',
  medicalSummary: '',
};

export const clinicLocation = [
  {label: 'Vasant Vihar', value: 'Vasant Vihar'},
  {label: 'Greater Kailash', value: 'Greater Kailash'},
];
export const consultationortreatment = [
  {label: 'Consultation', value: 'Consultation'},
  {label: 'Treatment', value: 'Treatment'},
];
export const cosmeticCosultation = [
  {label: 'Cosmetic Consultation', value: 'Cosmetic Consultation'},
  {
    label: 'General Skin and Hair Codition-Consultation',
    value: 'General Skin and Hair Codition-Consultation',
  },
  {label: 'Dental Consultation', value: 'Dental Consultation'},
  {label: 'Cosmetic Treatment', value: 'Cosmetic Treatment'},
  {
    label: 'General Skin and Hair Codition-Treatment',
    value: 'General Skin and Hair Codition-Treatment',
  },
  {label: 'Dental Treatment', value: 'Dental Treatment'},
];
export const specialist = [
  {label: 'Dr. Rajiv Kandhari', value: 'Dr. Rajiv Kandhari'},
  {label: 'Dr. Sanjeev Kandhari', value: 'Dr. Sanjeev Kandhari'},
  {label: 'Dr. Gargi Kandhari', value: 'Dr. Gargi Kandhari'},
];
export const panelList = [
  {label: 'Air India', value: 'Air India'},
  {label: 'Bhel', value: 'Bhel'},
  {label: 'Friends and family', value: 'Friends and family'},
  {label: 'Government Employee', value: 'Government Employee'},
];
export const maleFemale = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
];
export const yesno = [
  {label: 'Yes', value: 'Yes'},
  {label: 'No', value: 'No'},
];
export const maritalStatusList = [
  {label: 'Single', value: 'Single'},
  {label: 'Married', value: 'Married'},
  {label: 'Others', value: 'Others'},
];
export const sourceList = [
  {label: 'Word of mouth', value: 'Word of mouth'},
  {label: 'Website', value: 'Website'},
  {label: 'Walkin', value: 'Walkin'},
  {label: 'Google Search', value: 'Google Search'},
  {label: 'Facebook', value: 'Facebook'},
  {label: 'Instagram', value: 'Instagram'},
  {label: 'Youtube', value: 'Youtube'},
  {label: 'Friends/Family', value: 'Friends/Family'},
  {label: 'Phone Call', value: 'Phone Call'},
  {label: 'Others', value: 'Others'},
];
export const bloodgroup = [
  {label: 'O+', value: 'O+'},
  {label: 'O-', value: 'O-'},
  {label: 'A+', value: 'A+'},
  {label: 'A-', value: 'A-'},
  {label: 'B+', value: 'B+'},
  {label: 'B-', value: 'B-'},
  {label: 'AB+', value: 'AB+'},
  {label: 'AB-', value: 'AB-'},
];
