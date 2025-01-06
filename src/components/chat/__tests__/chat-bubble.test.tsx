import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/preact'
import { ChatBubble } from '../chat-bubble'

describe('ChatBubble', () => {
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    const { getByTestId } = render(<ChatBubble onClick={handleClick} />)

    fireEvent.click(getByTestId('chat-bubble'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('has accessible text', () => {
    const { getByRole } = render(<ChatBubble onClick={() => {}} />)
    expect(getByRole('button')).toHaveAccessibleName('Chat with us')
  })
})
