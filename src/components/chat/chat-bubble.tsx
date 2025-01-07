interface ChatBubbleProps {
  onClick: () => void
  isOpen: boolean
}

export function ChatBubble({ onClick, isOpen }: ChatBubbleProps) {
  return (
    <button
      onClick={onClick}
      data-testid="chat-bubble"
      class={`
        fixed bottom-4 right-4 
        flex items-center justify-center
        w-12 h-12 
        rounded-full 
        bg-black
        text-white 
        shadow-lg 
        transition-all 
        duration-[200ms]
        active:scale-[0.8]
        hover:scale-110
      `}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      <div class="relative w-6 h-6">
        <svg
          data-testid="message-icon"
          class={`
            absolute 
            inset-0 
            transition-[transform,opacity] 
            duration-[400ms]
            ease-in-out
            ${!isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-[45deg] opacity-0'}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <svg
          data-testid="chevron-down"
          class={`
            absolute 
            inset-0 
            transition-[transform,opacity] 
            duration-[400ms]
            ease-in-out
            ${isOpen ? 'scale-100 rotate-0 opacity-100' : 'rotate-180 opacity-0'}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
  )
}
