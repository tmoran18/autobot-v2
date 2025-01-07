interface MessageProps {
  text: string
  type: 'user' | 'bot'
}

export function Message({ text, type }: MessageProps) {
  return (
    <div
      data-testid="chat-message"
      class={`mb-4 ${type === 'user' ? 'ml-auto text-right' : 'mr-auto'}`}
    >
      <div
        class={`inline-block rounded-lg px-4 py-2 ${
          type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
        }`}
      >
        {text}
      </div>
    </div>
  )
}
