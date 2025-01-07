import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/preact'
import { ChatBubble } from '../chat-bubble'

describe('ChatBubble', () => {
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    const { getByTestId } = render(<ChatBubble onClick={handleClick} isOpen={false} />)

    fireEvent.click(getByTestId('chat-bubble'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('shows chevron-down icon when open', () => {
    const { getByTestId } = render(<ChatBubble onClick={() => {}} isOpen={true} />)
    expect(getByTestId('chevron-down')).toBeInTheDocument()
  })

  it('shows message icon when closed', () => {
    const { getByTestId } = render(<ChatBubble onClick={() => {}} isOpen={false} />)
    expect(getByTestId('message-icon')).toBeInTheDocument()
  })

  it('has aria label "Open chat" when closed', () => {
    const { getByRole } = render(<ChatBubble onClick={() => {}} isOpen={false} />)
    expect(getByRole('button')).toHaveAccessibleName('Open chat')
  })

  it('has aria label "Close chat" when open', () => {
    const { getByRole } = render(<ChatBubble onClick={() => {}} isOpen={true} />)
    expect(getByRole('button')).toHaveAccessibleName('Close chat')
  })
})
