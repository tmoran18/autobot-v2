import { useEffect, useRef } from 'preact/hooks'
import { useChatStore } from '../../stores/chat-store'
import { Message } from './message'
import { TypingIndicator } from './typing-indicator'

export function MessageList() {
  const messages = useChatStore((state) => state.messages)
  const isTyping = useChatStore((state) => state.isTyping)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current
      containerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth',
      })
    }
  }, [messages, isTyping])

  return (
    <div
      ref={containerRef}
      data-testid="message-list"
      class="flex flex-col space-y-4 p-4 overflow-y-auto scrollbar-none h-full"
    >
      {messages.map((message) => (
        <Message key={message.id} text={message.text} type={message.type} />
      ))}
      {isTyping && (
        <div class="ml-4">
          <TypingIndicator />
        </div>
      )}
    </div>
  )
}
