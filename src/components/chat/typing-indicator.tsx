export function TypingIndicator() {
  return (
    <div
      data-testid="typing-indicator"
      class="flex space-x-2 p-3 bg-gray-100 rounded-lg max-w-[100px]"
    >
      <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
    </div>
  )
}
