export interface Message {
  id: string
  text: string
  type: 'bot' | 'user'
  timestamp: number
}

export interface ChatConfig {
  websiteId: string
  theme?: {
    primary: string
    secondary: string
  }
}
