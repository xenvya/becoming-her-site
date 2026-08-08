// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'
import './test/setup'

describe('Becoming Her website', () => {
  it('renders the primary home-page message and navigation', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { level: 1, name: /helping young women become/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /apply for mentorship/i })[0]).toHaveAttribute('href', '/apply')
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument()
  })

  it('renders the safety page with the scope disclaimer', async () => {
    render(
      <MemoryRouter initialEntries={['/safety']}>
        <App />
      </MemoryRouter>,
    )

    expect(await screen.findByRole('heading', { level: 1, name: /care starts with clarity/i })).toBeInTheDocument()
    expect(screen.getByText(/not a substitute for professional counseling/i)).toBeInTheDocument()
  })
})
