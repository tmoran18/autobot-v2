import { useState } from 'preact/hooks'
import { useChatStore } from '../../stores/chat-store'

export function MessageInput() {
  const [message, setMessage] = useState('')
  const sendMessage = useChatStore((state) => state.sendMessage)
  const sendBotResponse = useChatStore((state) => state.sendBotResponse)

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    if (!message.trim()) return

    await sendMessage(message.trim())
    setMessage('')

    // Temporary bot response until we implement the chat tree
    await sendBotResponse("I'm a bot, I'll be smarter soon!")
  }

  return (
    <form onSubmit={handleSubmit} class="rounded-b-3xl border-gray-200 p-4 bg-white">
      <div class="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Message..."
          class="w-full text-gray-900 bg-white px-4 py-3 pr-12 shadow-[0_0px_4px_rgba(0,0,0,0.2)] rounded-full focus:outline-none focus:border-black focus:border-[1px] focus:ring-1 focus:ring-black selection:bg-blue-200"
          data-testid="message-input"
        />
        <button
          type="submit"
          class="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black rounded-full text-white hover:bg-gray-800 transition-colors disabled:opacity-50"
          disabled={!message.trim()}
          data-testid="send-button"
        >
          <svg class="w-4 h-4 rotate-[-90deg]" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
