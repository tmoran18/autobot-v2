interface ChatBubbleProps {
  onClick: () => void
}

export function ChatBubble({ onClick }: ChatBubbleProps) {
  return (
    <button
      onClick={onClick}
      data-testid="chat-bubble"
      class="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors"
    >
      Chat with us
    </button>
  )
}
