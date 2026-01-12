import {useForm, ValidationError} from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xdakgzvd");

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-pink-50 font-vt323">
            {/* Header */}
            <p className="mt-8 text-gray-400 text-2xl text-center">
                You can find my {" "} 
                    <span className="text-pink-400 font-bold ">
                        resume
                    </span> as a  {" "} 
                    <span className=" font-bold ">
                         sticker
                    </span>{" "} on the {" "} 
                    <span className="text-pink-400 font-bold ">
                         PC
                    </span>{" "} or in {" "} 
                    <span className="text-pink-400 font-bold ">
                        Projects 
                    </span>{" "} :)
            </p>
            
            <h2 className="text-6xl md:text-8xl text-pink-500 mb-8 uppercase tracking-tighter">
                Contact Me!
            </h2>

            
            <div className="w-full max-w-2xl bg-white/40 backdrop-blur-lg border border-pink-200/50 p-8 rounded-[30px] shadow-xl">
                
                {state.succeeded ? (
                    <div className="text-center py-10 animate-in zoom-in duration-300">
                        <h3 className="text-5xl text-pink-500 mb-4">
                            QUEST COMPLETE! ₊ ⊹
                            </h3>
                        <p className="text-2xl text-pink-400 italic">
                            Thank you for reaching out! I will be in touch soon. ❀
                            </p>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="mt-6 text-pink-400 border-b border-pink-400 text-xl hover:text-pink-600 transition-colors">
                            Want to send me another message?
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        
                        
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-2xl text-pink-600 ml-2">
                                Your Name</label>
                            <input 
                                id="name"
                                type="text" 
                                name="name"
                                required
                                className="bg-white/60 border-2 border-pink-100 rounded-2xl px-4 py-3 text-xl focus:outline-none focus:border-pink-400 transition-colors"
                                placeholder="Enter your name ⋆˚˖°"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-2xl text-pink-600 ml-2">
                                Email Address</label>
                            <input 
                                id="email"
                                type="email" 
                                name="email"
                                required
                                className="bg-white/60 border-2 border-pink-100 rounded-2xl px-4 py-3 text-xl focus:outline-none focus:border-pink-400 transition-colors"
                                placeholder="❀ email@example.com"
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                                className="text-red-400 text-sm ml-2"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-2xl text-pink-600 ml-2">
                                Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="bg-white/60 border-2 border-pink-100 rounded-2xl px-4 py-3 text-xl focus:outline-none focus:border-pink-400 transition-colors resize-none"
                                placeholder="YAY! What are you reaching out for? I'd love to hear about it."
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                                className="text-red-400 text-sm ml-2"
                            />
                        </div>


                        <button 
                            type="submit" 
                            disabled={state.submitting}
                            className={`mt-4 bg-pink-500 hover:bg-pink-600 text-white text-3xl py-3 rounded-2xl shadow-lg transition-all active:scale-95 ${state.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {state.submitting ? 'Sending...' : 'Send Message ⟡'}
                        </button>
                    </form>
                )}
            </div>


            <div className="mt-12 mb-8 text-center">
                <p className="text-gray-400 text-2xl tracking-wide">
                    Or reach out directly via {" "}
                    <span className="text-pink-400 font-bold ">
                        clickable
                    </span>
                    {" "} 
                    <span className=" font-bold ">
                         stickers
                    </span>{" "} on the{" "} 
                    <span className="text-pink-400 font-bold ">
                        interactive PC
                    </span> !
                </p>
            </div>
        </div>
    );
};

export default Contact;