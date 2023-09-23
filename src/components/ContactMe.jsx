
import { useState } from "react";
import isValidEmail from "../utils/helperFunctions";
function ContactMe() {


  const [formName, setFormName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccessfull, setIsSuccessfull] = useState(false);

  const [validMessage, setValidMessage] = useState(true);




  function handleSubmit(event) {
    event.preventDefault()
    if (message.trim() === "" || formName.trim() === "") {
      setValidMessage(false)
      alert('Please fill in the input fields')
    } else {
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        formName,
        email,
        message,
      
      }),
    })
      .then(() => {
        setIsSuccessfull(true);

        setEmail('');
        setMessage('');
        setFormName('')
  
      })
      .catch((error) => console.log(error));
  }


  }
if (isSuccessfull) {
  return (

    <div id="contact-me" className="flex mt-10 items-center justify-start bg-white ">
      <div className="mx-auto w-full max-w-lg mt-16">
        <h1 className="text-4xl font-medium ">Contact me</h1>


        <form onSubmit={handleSubmit} className="mt-10" data-netlify="true" name='contact' >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required value={formName} onChange={(event) => {
                setFormName(event.target.value)
              }} />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
            </div>
            <div className="relative z-0">
              <input type="email" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required value={email} onChange={(event) => {
                setEmail(event.target.value)
              }} />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required value={message} onChange={(event) => {
                setMessage(event.target.value)
              }}></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
            </div>
          </div>
          <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white" >Send Message</button>
        </form>
        <div>
          <p className="mt-10 mb-10 peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm">Thankyou for your message, I will contact you shortly</p>
        </div>
      </div>
    </div>
  )

}
return (

  <div id="contact-me" className="flex mt-10 items-center justify-start bg-white px-4  ">
    <div className="mx-auto w-full max-w-lg mt-16">
      <h1 className="text-4xl font-medium ">Contact me</h1>


      <form onSubmit={handleSubmit} className="mt-10" data-netlify="true" name='contact' >
      <input type="hidden" name="form-name" value="contact" />
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative z-0">
            <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required value={formName} onChange={(event) => {
              setFormName(event.target.value)
            }} />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
          </div>
          <div className="relative z-0">
            <input type="email" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required value={email} onChange={(event) => {
              setEmail(event.target.value)
            }} />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
          </div>
          <div className="relative z-0 col-span-2">
            <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required value={message} onChange={(event) => {
              setMessage(event.target.value)
            }}></textarea>
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
          </div>
        </div>
        <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white hover:text-cyan-500 transition-colors" >Send Message</button>
      </form>
    </div>
  </div>
)
}

export default ContactMe


