import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export default function App() {
  const [form, setForm] = useState({ name: '', description: '', price: '', category: '' })
  const [createMessage, setCreateMessage] = useState(null)
  const [createLoading, setCreateLoading] = useState(false)

  const [itemId, setItemId] = useState('')
  const [fetchedItem, setFetchedItem] = useState(null)
  const [fetchMessage, setFetchMessage] = useState(null)
  const [fetchLoading, setFetchLoading] = useState(false)

  const handleCreateChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCreateSubmit = async (e) => {
    e.preventDefault()
    setCreateMessage(null)
    setCreateLoading(true)
    try {
      const body = {
        name: form.name.trim(),
        description: form.description.trim() || undefined,
        price: form.price === '' ? undefined : Number(form.price),
        category: form.category.trim() || undefined,
      }
      const res = await fetch(`${API_URL}/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (res.ok) {
        setCreateMessage({ type: 'success', text: `Item created with ID: ${data.id}` })
        setForm({ name: '', description: '', price: '', category: '' })
      } else {
        const msg = data.details
          ? Object.entries(data.details).map(([k, v]) => `${k}: ${v}`).join(' ')
          : (data.message || data.error || 'Failed to create item')
        setCreateMessage({ type: 'error', text: msg })
      }
    } catch (err) {
      setCreateMessage({ type: 'error', text: err.message || 'Network error. Is the API running and CORS set?' })
    } finally {
      setCreateLoading(false)
    }
  }

  const handleFetch = async (e) => {
    e.preventDefault()
    const id = itemId.trim()
    if (!id) return
    setFetchMessage(null)
    setFetchedItem(null)
    setFetchLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/items/${id}`)
      if (res.status === 404) {
        setFetchMessage({ type: 'info', text: 'No item found with this ID.' })
        return
      }
      const data = await res.json()
      if (res.ok) {
        setFetchedItem(data)
      } else {
        setFetchMessage({ type: 'error', text: data.message || 'Failed to fetch item' })
      }
    } catch (err) {
      setFetchMessage({ type: 'error', text: err.message || 'Network error. Is the API running and CORS set?' })
    } finally {
      setFetchLoading(false)
    }
  }

  return (
    <>
      <h1 className="app-title">Items API – UI</h1>

      <section className="section">
        <h2>Create item</h2>
        <form onSubmit={handleCreateSubmit}>
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleCreateChange}
            required
            placeholder="e.g. Wireless Headphones"
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleCreateChange}
            placeholder="Optional description"
          />
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            value={form.price}
            onChange={handleCreateChange}
            placeholder="0.00"
          />
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            value={form.category}
            onChange={handleCreateChange}
            placeholder="e.g. Electronics"
          />
          <button type="submit" disabled={createLoading}>
            {createLoading ? 'Creating…' : 'Create item'}
          </button>
        </form>
        {createMessage && (
          <div className={`message ${createMessage.type}`}>{createMessage.text}</div>
        )}
      </section>

      <section className="section">
        <h2>Get item by ID</h2>
        <form onSubmit={handleFetch} className="flex">
          <input
            type="text"
            placeholder="Item ID"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
          />
          <button type="submit" disabled={fetchLoading}>
            {fetchLoading ? 'Loading…' : 'Fetch'}
          </button>
        </form>
        {fetchMessage && (
          <div className={`message ${fetchMessage.type}`}>{fetchMessage.text}</div>
        )}
        {fetchedItem && (
          <div className="item-display">
            <p><strong>ID:</strong> {fetchedItem.id}</p>
            <p><strong>Name:</strong> {fetchedItem.name}</p>
            <p><strong>Description:</strong> {fetchedItem.description || '—'}</p>
            <p><strong>Price:</strong> {fetchedItem.price != null ? fetchedItem.price : '—'}</p>
            <p><strong>Category:</strong> {fetchedItem.category || '—'}</p>
            {fetchedItem.createdAt && (
              <p><strong>Created:</strong> {new Date(fetchedItem.createdAt).toLocaleString()}</p>
            )}
          </div>
        )}
      </section>
    </>
  )
}
