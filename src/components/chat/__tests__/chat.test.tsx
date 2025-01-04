import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/preact'
import { Chat } from '../index'

describe('Chat', () => {
  it('renders chat bubble by default', () => {
    const { getByTestId } = render(<Chat />)
    expect(getByTestId('chat-bubble')).toBeInTheDocument()
  })

  it('shows chat window when bubble is clicked', () => {
    const { getByTestId, queryByTestId } = render(<Chat />)

    // Initially, chat window should not be visible
    expect(queryByTestId('chat-window')).not.toBeInTheDocument()

    // Click the chat bubble
    fireEvent.click(getByTestId('chat-bubble'))

    // Chat window should now be visible
    expect(getByTestId('chat-window')).toBeInTheDocument()
  })
})
