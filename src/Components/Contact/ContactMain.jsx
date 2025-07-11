import React from 'react'

const ContactMain = () => {
  return (
    <>
      <div className="section" id="contact">
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div className="text-center max-w-[600px] mx-auto">
            <div className="md:mt-[-400px] sm:text-3xl text-2xl font-bold mb-5">
              Get in touch
            </div>
            <p className="text:sm leading-7 text-gray">
              It's my pleasure to take this wonderful journey with you, as we deep dive into your subconscious and channel your inner being.
              Our goal is to ensure that you attain the clarity you so desire, even as we make this voyage and move towards your desired destination. 
            </p>
          </div>
          <form
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-5 border py-5 px-5 border-green-200 shadow"
            action=""
            // ref={form} 
            // onSubmit={sendEmail}
          >
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                name='user_name'
                required
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                name='user_email'
                required
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              

              <label
                className="text-xl text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                What bothers you today?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message_1"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>

              <label
                className="text-xl text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                What are your needs?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message_2"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>

              <label
                className="text-xl text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                What brings you peace?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message_3"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>

              <label
                className="text-xl text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                What inspires you?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message_4"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>

              <label
                className="text-xl text-gray text leading-7 mr-4"
                htmlFor="text"
              >
                Why are you here?
              </label>
              <textarea
                required
                placeholder="Tell us your answer"
                name="message_5"
                id=""
                cols="30"
                rows="3"
                className="w-full rounded border border-green-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mt-4 mb-4"
              ></textarea>

              <div>
                <div className="flex justify-center">
                  <button type="submit" value="Send"  className="bg-Teal hover:scale-105 duration-200 text-black py-1 px-4 rounded-full  mt-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactMain
