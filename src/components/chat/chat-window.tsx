import { MessageList } from './message-list'
import { MessageInput } from './message-input'

interface ChatWindowProps {
  isOpen: boolean
  onClose?: () => void
}

export function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  return (
    <div
      data-testid="chat-window"
      class={`
        fixed
        text-black
        transition-all 
        duration-[400ms]
        ease-out
        origin-bottom-right
        ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        
        /* Desktop styles */
        bottom-20
        right-4 
        w-96 
        h-[500px] 
        bg-white 
        rounded-[16px]
        shadow-[0_4px_24px_rgba(0,0,0,0.12)]
        flex 
        flex-col
        
        /* Responsive width */
        sm:max-w-[calc(100vw-2rem)]
        md:max-w-md

        /* Mobile styles */
        sm:bottom-20
        max-sm:bottom-0
        max-sm:right-0
        max-sm:left-0
        max-sm:top-0
        max-sm:w-full
        max-sm:h-screen
        max-sm:rounded-none
        max-sm:z-50
      `}
    >
      <div class="sticky top-0 z-10 p-4 border-b border-gray-200 bg-white flex justify-between items-center">
        <h2 class="text-lg font-semibold">Chat with us</h2>
        <button
          onClick={onClose}
          class="sm:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flex-1 overflow-hidden">
        <MessageList />
      </div>
      <MessageInput />
    </div>
  )
}
