import emailjs from "@emailjs/browser"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BadgeCheck } from 'lucide-react';

const Contacts = () => {
    const [fromData, setFromData] = useState ({
      name: "",
      email: "",
      message: "",
    })

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
      const { name, value} = e.target;
      setFromData({
        ...fromData, [name]: value,
      });
    };

    const validate = () => {
      let errors = {};
      if (!fromData.name) errors.name = "Name is required";
      if (!fromData.email) {
        errors.email = "Email is required";
      }else if (!/\S+@\S+\.\S+/.test(fromData.email)){
        errors.email = "Invalid email format";
      }
      if (!fromData.message) errors.message = "Message is required";
      return errors;
    }
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        }else{
          setErrors({});
          setIsSending(true);

          emailjs
            .send(
              "service_0diovst",
              "template_odrchka",
              fromData,
              "YJfRxjN0CoCSnIaph",
            )
            .then((response) =>{
              toast.success("Message sent successfully");
              setFromData({name: "", email: "", message: ""});
            }) 
            .catch((error) => {
              console.log("Faleid...",error);
              toast.error("Failed to send message.Please try again later.");
            })
            .finally(()=>{
              setIsSending(false);
            })
        }
      }
    

            return (
              <section id="Contacts">
               <div className="p-4 lg:3/4" >
                <Toaster />
                <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
                  Contact Us
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 flex space-x-4">
                    <div className="lg:w-1/2">
                      <input type="text" 
                        id="name"
                        name="name"
                        value={fromData.name}
                        placeholder="Name"
                        onChange={handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                      />
                      {errors.name && (
                        <p className="text-sm text-rose-800">{errors.name}</p>
                      )}
                    </div>
                    <div className="lg:w-1/2">
                      <input type="email" 
                        id="email"
                        name="email"
                        value={fromData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                      />
                      {errors.email && (
                        <p className="text-sm text-rose-800">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                      <textarea
                        id="message"
                        name="message"
                        value={fromData.message}
                        placeholder="Message"
                        onChange={handleChange}
                        className="mb-8 w-full  appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                        rows="6" 
                      />
                      {errors.message && (
                        <p className="text-sm text-rose-800">{errors.message}</p>
                      )}
                    </div>
                    <button type="submit" className={'mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : "" }'}
                      disabled={isSending}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isSending ? "Sending..." : "Send"}
                        <BadgeCheck />
                      </div>
                    </button>
                </form>
              </div>
              </section>
           
            )
}

export default Contacts;
