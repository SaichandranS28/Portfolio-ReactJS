import React from 'react'
import contact from '../assets/contact.png'
import { InteractiveHoverButtonDemo } from './ui/InteractiveHoverButtonDemo';
import RetroGrid from '@/components/ui/retro-grid';
import Swal from 'sweetalert2'


function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2ecc898b-d6e9-4b83-b6d8-659050553eb6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      Swal.fire({
        title: "Thanks for Contacting Me!👍",
        text: "I will get back to you soon!",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
        <div id='Contact' className="primary py-24">
            <div className="w-full md:w-4/5 flex justify-center items-center mx-auto gap-10">
                <div className="w-1/5 hidden md:block">
                    <img src={contact} className='rounded-xl w-96 h-[645px] object-cover' alt="" />
                </div>

                <div className="w-full md:w-4/5 h-full border p-4 rounded-3xl border-none font-heroFont">
                  <div className="relative flex h-full w-full overflow-hidden rounded-lg py-5 bg-background md:shadow-xl">
                      <div className="px-5 w-full h-4/5">
                          <h1 className='text-4xl mb-7'>Contact Me!....👇</h1>
                          <form action="" className='' onSubmit={onSubmit}>
                              <div className="mb-2">
                                  <label htmlFor="" className='text-2xl'>Full Name</label><br />
                                  <input type="text" className='w-full p-2 mt-2 bg-gray-100 rounded-xl py-3 border border-gray-400 font-heroName outline-none focus:border-2 focus:border-blue-400' placeholder='Enter Your Name' name="name" id="" required/>
                              </div>
                              <div className="mb-2">
                                  <label htmlFor="" className='text-2xl'>Email</label><br />
                                  <input type='email' className='w-full p-2 mt-2 bg-gray-100 rounded-xl py-3 border border-gray-400 font-heroName outline-none focus:border-2 focus:border-blue-400' placeholder='Enter Your Mail' name="email" id="" required/>
                              </div>
                              <div className="mb-2">
                                  <label htmlFor="" className='text-2xl'>Phone no</label><br />
                                  <input type="tel" className='w-full p-2 mt-2 bg-gray-100 rounded-xl py-3 border border-gray-400 font-heroName outline-none focus:border-2 focus:border-blue-400' placeholder='Enter Phone No' name="Phone-No" id="" />
                              </div>
                              <div className="mb-2">
                                  <label htmlFor="" className='text-2xl'>Message</label><br />
                                  <textarea name="Message"  className='h-32 w-full p-2 mt-2 bg-gray-100 rounded-xl border border-gray-400 font-heroName outline-none focus:border-2 focus:border-blue-400' placeholder='Leave Your Message here'  id="" required></textarea>
                              </div>
                              <div className="mb-2">
                                  <InteractiveHoverButtonDemo />
                              </div>
                          </form>
                      </div>
                  <RetroGrid />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
