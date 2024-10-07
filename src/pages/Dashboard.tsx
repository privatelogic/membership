import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h2>
      <p className="mb-4">Hello, {user?.email}!</p>
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Your Membership Benefits</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Exclusive content access</li>
          <li>Priority customer support</li>
          <li>Monthly newsletter</li>
          <li>Early access to new features</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard