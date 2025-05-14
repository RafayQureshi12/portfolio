"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  })

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })
      setInputs({
        name: "",
        email: "",
        message: "",
      })
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      })
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

    try {
      const response = await fetch("https://formspree.io/f/xeogvend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      })

      const data = await response.json()

      if (response.ok) {
        handleServerResponse(true, "Thank you, your message has been sent!")
      } else {
        handleServerResponse(false, data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      handleServerResponse(false, "An error occurred while submitting the form.")
    }
  }

  return (
    <div className="p-[10px] lg:p-[16px]">
      <h3 className="text-[20px]   text-[#F5E0DC] mb-[8px]">Send Me a Message</h3>

      {status.info.error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-[#F5E0DC]">
          Error: {status.info.msg}
        </div>
      )}

      {status.submitted && !status.info.error && (
        <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-[#F5E0DC]">
          {status.info.msg}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#C3BAC6] p-[4px] mb-[4px]">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleOnChange}
            className="w-[200px] p-[4px] mb-[4px] rounded-lg bg-[#1E1E2E] border border-[#6E6C7E]/30 focus:border-[#F28FAD] focus:outline-none focus:ring-1 focus:ring-[#F28FAD] text-[#F5E0DC]"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#C3BAC6] mb-[4px] p-[4px]">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleOnChange}
            className="w-[250px] p-[4px] mb-[4px] rounded-lg bg-[#1E1E2E] border border-[#6E6C7E]/30 focus:border-[#F28FAD] focus:outline-none focus:ring-1 focus:ring-[#F28FAD] text-[#F5E0DC]"
            placeholder="John@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#C3BAC6] mb-[4px] p-[4px]">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={inputs.message}
            onChange={handleOnChange}
            className="w-full max-w-[600px] p-[4px] rounded-lg bg-[#1E1E2E] border border-[#6E6C7E]/30 focus:border-[#F28FAD] focus:outline-none focus:ring-1 focus:ring-[#F28FAD] text-[#F5E0DC]"
            placeholder="Hello, I'd like to talk about..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="p-[6px] mt-[4px] rounded-full bg-gradient-to-r from-[#F28FAD] to-[#CBA6F7] hover:from-[#CBA6F7] hover:to-[#F28FAD] text-[#1E1E2E] font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#F28FAD]/20 disabled:opacity-70"
        >
          {status.submitting ? "Sending..." : status.submitted ? "Sent!" : "Send Message"}
        </button>
      </form>
    </div>
  )
}
