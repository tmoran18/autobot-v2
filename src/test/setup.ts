import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/preact'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
  cleanup()
})
