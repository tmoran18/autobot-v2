import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { render, fireEvent } from '@testing-library/preact'
import { ChatWindow } from '../chat-window'

// Mock just the Zustand store behavior in MessageList, not the whole component
vi.mock('../../stores/chat-store', () => ({
  useChatStore: () => ({
    messages: [],
    isTyping: false,
    sendMessage: vi.fn(),
    sendBotResponse: vi.fn(),
  }),
}))

// Mock scrollTo for all elements
beforeAll(() => {
  Element.prototype.scrollTo = vi.fn()
})

// Clean up mock after tests
afterAll(() => {
  vi.restoreAllMocks()
})

describe('ChatWindow', () => {
  // Visibility tests
  describe('ChatWindow', () => {
    it('exists as a component', () => {
      expect(ChatWindow).toBeDefined()
    })
  })

  it('is hidden when isOpen is false', () => {
    const { getByTestId } = render(<ChatWindow isOpen={false} onClose={() => {}} />)
    const window = getByTestId('chat-window')
    expect(window).toHaveClass('opacity-0 scale-0')
    expect(window).not.toHaveClass('opacity-100 scale-100')
  })

  // Structure tests
  it('renders header with correct title', () => {
    const { getByRole } = render(<ChatWindow isOpen={true} onClose={() => {}} />)
    const heading = getByRole('heading')
    expect(heading).toHaveTextContent('Chat with us')
  })

  it('renders message list and input', () => {
    const { getByTestId } = render(<ChatWindow isOpen={true} onClose={() => {}} />)
    expect(getByTestId('message-list')).toBeInTheDocument()
    expect(getByTestId('message-input')).toBeInTheDocument()
  })

  // Mobile view tests
  it('has correct mobile styles', () => {
    const { getByTestId } = render(<ChatWindow isOpen={true} onClose={() => {}} />)
    const window = getByTestId('chat-window')
    expect(window).toHaveClass('max-sm:w-full')
    expect(window).toHaveClass('max-sm:h-screen')
    expect(window).toHaveClass('max-sm:rounded-none')
  })

  // Interaction tests
  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn()
    const { getByLabelText } = render(<ChatWindow isOpen={true} onClose={handleClose} />)

    fireEvent.click(getByLabelText('Close chat'))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  // Accessibility tests
  it('has accessible close button', () => {
    const { getByRole } = render(<ChatWindow isOpen={true} onClose={() => {}} />)
    const closeButton = getByRole('button', { name: /close chat/i })
    expect(closeButton).toBeInTheDocument()
  })

  it('maintains proper heading hierarchy', () => {
    const { getByRole } = render(<ChatWindow isOpen={true} onClose={() => {}} />)
    const heading = getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })

  // Edge cases
  it('handles missing onClose prop gracefully', () => {
    expect(() => {
      render(<ChatWindow isOpen={true} />)
    }).not.toThrow()
  })

  it('preserves content when toggling visibility', () => {
    const { getByTestId, rerender } = render(<ChatWindow isOpen={true} onClose={() => {}} />)
    const messageList = getByTestId('message-list')

    rerender(<ChatWindow isOpen={false} onClose={() => {}} />)
    expect(messageList).toBeInTheDocument()
  })
})
