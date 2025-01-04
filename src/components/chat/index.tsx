import { useState } from 'preact/hooks'
import { ChatBubble } from './chat-bubble'
import { ChatWindow } from './chat-window'

export function Chat() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div class="fixed bottom-4 right-4">
      <ChatBubble onClick={() => setIsOpen(!isOpen)} />
      <ChatWindow isOpen={isOpen} />
    </div>
  )
}
