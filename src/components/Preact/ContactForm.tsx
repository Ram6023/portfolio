import { useState, useRef } from 'preact/hooks'

type StatusType = {
    status: 'idle' | 'success' | 'error',
    message: string
}

const ContactForm = () => {
    const [mailStatus, setMailStatus] = useState<StatusType>({ status: 'idle', message: "" })
    const [isLoading, setisLoading] = useState<boolean>(false)

    const NameRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const MessageRef = useRef<HTMLTextAreaElement>(null)

    const HandleFormSubmit = async (e: SubmitEvent) => {
        e.preventDefault();

        if (!NameRef.current || !EmailRef.current || !MessageRef.current) return

        const name = NameRef.current.value;
        const email = EmailRef.current.value;
        const message = MessageRef.current.value;

        // Simple validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setMailStatus({ status: 'error', message: '🙄 Invalid Email ID!' })
            return
        }

        setisLoading(true)
        setMailStatus({ status: 'idle', message: "" })

        try {
            const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY;

            if (!accessKey) {
                throw new Error("Missing Web3Forms Access Key. Please check your .env file.")
            }

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: name,
                    email: email,
                    message: message,
                    subject: `New Message from Portfolio: ${name}`,
                    from_name: "Portfolio Contact Bot",
                }),
            });

            const result = await response.json();

            if (result.success) {
                setMailStatus({ status: 'success', message: "👍 Message Sent!" })
                NameRef.current.value = ""
                EmailRef.current.value = ""
                MessageRef.current.value = ""
            } else {
                throw new Error(result.message || "😵 Message not Sent")
            }
        } catch (error: any) {
            setMailStatus({ status: 'error', message: error.message || "An error occurred" })
        } finally {
            setisLoading(false)
            setTimeout(() => {
                setMailStatus({ status: 'idle', message: "" })
            }, 5000);
        }
    }

    return (
        <form onSubmit={HandleFormSubmit} className="Fade_Up bg-LinkBtnGradient rounded-md w-full lg:max-w-[650px] px-4 py-2 outline outline-1 outline-white/20 flex_center flex-col">
            <label
                htmlFor="name"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='name'
                    required
                    ref={NameRef} />
            </label>
            <label
                htmlFor="email"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Email
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='email'
                    required
                    ref={EmailRef} />
            </label>
            <label
                htmlFor="message"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Message
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Enter your Message"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground resize-none"
                    required
                    ref={MessageRef} />
            </label>

            <div className="w-full flex justify-start items-center gap-4">
                <button
                    className="flex_center gap-4 border-none bg-background text-foreground outline outline-1 outline-white/20 my-1 mx-2 py-2 px-6 lg:px-20 rounded-md transition-all hover:bg-white/10"
                    type="submit"
                    disabled={isLoading}
                >
                    {
                        isLoading ? (
                            <>
                                <span>Sending</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                            </>
                        ) : (
                            <>
                                <span>Submit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg>
                            </>
                        )
                    }
                </button>
                <span className={mailStatus.status === 'error' ? 'text-red-400' : 'text-green-400'}>
                    {mailStatus.message}
                </span>
            </div>
        </form>
    )
}

export default ContactForm