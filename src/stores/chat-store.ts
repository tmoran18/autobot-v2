import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Message {
  id: string
  text: string
  type: 'user' | 'bot'
  timestamp: number
  isTyping?: boolean
}

interface ChatState {
  isOpen: boolean
  messages: Message[]
  isTyping: boolean

  // Actions
  setOpen: (isOpen: boolean) => void
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void
  setTyping: (isTyping: boolean) => void
  sendMessage: (text: string) => Promise<void>
  sendBotResponse: (text: string) => Promise<void>
}

export const useChatStore = create<ChatState>()(
  devtools((set) => ({
    isOpen: false,
    messages: [],
    isTyping: false,

    setOpen: (isOpen) => set({ isOpen }),

    addMessage: (message) =>
      set((state) => ({
        messages: [
          ...state.messages,
          {
            ...message,
            id: crypto.randomUUID(),
            timestamp: Date.now(),
          },
        ],
      })),

    setTyping: (isTyping) => set({ isTyping }),

    sendMessage: async (text: string) => {
      set((state) => ({
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            text,
            type: 'user',
            timestamp: Date.now(),
          },
        ],
      }))

      // Set typing indicator
      set({ isTyping: true })

      // Simulate bot thinking
      await new Promise((resolve) => setTimeout(resolve, 1500))

      set({ isTyping: false })
    },

    sendBotResponse: async (text: string) => {
      set((state) => ({
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            text,
            type: 'bot',
            timestamp: Date.now(),
          },
        ],
      }))
    },
  }))
)
