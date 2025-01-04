import { render } from 'preact'
import './style.css'
import { Chat } from './components/chat'

declare global {
  interface Window {
    initChatWidget: () => void
  }
}

function initChatWidget() {
  // Create container
  const container = document.createElement('div')
  container.id = 'chat-widget-container'
  document.body.appendChild(container)

  // Render chat
  render(<Chat />, container)
}

// Make globally available
if (typeof window !== 'undefined') {
  window.initChatWidget = initChatWidget
}

// Auto-initialize (common pattern for widgets)
initChatWidget()
