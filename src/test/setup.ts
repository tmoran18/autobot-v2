import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/preact'
import '@testing-library/jest-dom/vitest'

vi.mock('zustand')

afterEach(() => {
  cleanup()
})
