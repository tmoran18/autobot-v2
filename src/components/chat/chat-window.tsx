interface ChatWindowProps {
  isOpen: boolean
}

export function ChatWindow({ isOpen }: ChatWindowProps) {
  if (!isOpen) return null

  return (
    <div
      data-testid="chat-window"
      class="fixed bottom-20 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl border border-gray-200"
    >
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold">Chat</h2>
      </div>
      <div class="p-4">{/* Message list will go here */}</div>
    </div>
  )
}
