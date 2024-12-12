 
// import './App.css';
import Form from './componenets/Form';


// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs
//     .sendForm('service_mexzvvb', 'template_jysp68l', form.current, {
//       publicKey: 'cFfrpbXZTMoG4noiM',
//     })
//     .then(
//       () => {
//         console.log('SUCCESS!');
//         alert("Message sent successfully!");
//       },
//       (error) => {
//         console.log('FAILED...', error.text);
//         alert("Failed to send message, please try again.");
//       },
//     );
//     e.target.reset()
// };

function App() {
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
