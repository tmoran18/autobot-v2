import { create } from 'zustand'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatState {
  isOpen: boolean
  messages: Message[]
  toggleChat: () => void
  addMessage: (message: Message) => void
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  messages: [],
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
}))
