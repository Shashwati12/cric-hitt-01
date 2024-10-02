import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, PlusCircle, Send } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Simple Button component
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded font-semibold ${className}`}
    {...props}
  >
    {children}
  </button>
)

// Simple Input component
const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-3 py-2 border rounded ${className}`}
    {...props}
  />
)

// Simple Label component
const Label = ({ children, className, ...props }) => (
  <label className={`block mb-1 ${className}`} {...props}>
    {children}
  </label>
)

export default function ReForm() {
  const [teamInfo, setTeamInfo] = useState({
    teamName: '',
    captainName: '',
    email: '',
    phone: ''
  })
  const [players, setPlayers] = useState([{ name: '', role: '' }])

  const handleTeamInfoChange = (e) => {
    const { name, value } = e.target
    setTeamInfo(prevInfo => ({ ...prevInfo, [name]: value }))
  }

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = players.map((player, i) => 
      i === index ? { ...player, [field]: value } : player
    )
    setPlayers(newPlayers)
  }

  const addPlayer = () => {
    setPlayers([...players, { name: '', role: '' }])
  }

  const removePlayer = (index) => {
    setPlayers(players.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { ...teamInfo, players })
    toast.success('Team registered successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    setTeamInfo({ teamName: '', captainName: '', email: '', phone: '' })
    setPlayers([{ name: '', role: '' }])
  }

  return (
    <div className="min-h-screen bg-green-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-green-600 text-white p-6">
          <h1 className="text-3xl font-bold text-center flex items-center justify-center">
            {/* <Cricket className="mr-2 h-8 w-8" /> */}
            Cricket Tournament Registration
          </h1>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="teamName" className="text-lg font-semibold text-green-700">Team Name</Label>
                <Input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={teamInfo.teamName}
                  onChange={handleTeamInfoChange}
                  required
                  className="mt-1 border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="captainName" className="text-lg font-semibold text-green-700">Captain's Name</Label>
                <Input
                  type="text"
                  id="captainName"
                  name="captainName"
                  value={teamInfo.captainName}
                  onChange={handleTeamInfoChange}
                  required
                  className="mt-1 border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg font-semibold text-green-700">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={teamInfo.email}
                  onChange={handleTeamInfoChange}
                  required
                  className="mt-1 border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-lg font-semibold text-green-700">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={teamInfo.phone}
                  onChange={handleTeamInfoChange}
                  required
                  className="mt-1 border-green-300 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Players</h3>
              <AnimatePresence>
                {players.map((player, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-2 mb-4"
                  >
                    <Input
                      type="text"
                      placeholder="Player Name"
                      value={player.name}
                      onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
                      required
                      className="flex-grow border-green-300 focus:border-green-500 focus:ring-green-500"
                    />
                    <Input
                      type="text"
                      placeholder="Role"
                      value={player.role}
                      onChange={(e) => handlePlayerChange(index, 'role', e.target.value)}
                      required
                      className="flex-grow border-green-300 focus:border-green-500 focus:ring-green-500"
                    />
                    <Button
                      type="button"
                      onClick={() => removePlayer(index)}
                      className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove player {index + 1}</span>
                    </Button>
                  </motion.div>
                ))}
              </AnimatePresence>
              <Button
                type="button"
                onClick={addPlayer}
                className="w-full mt-2 border border-green-600 text-green-600 hover:bg-green-50"
              >
                <PlusCircle className="mr-2 h-4 w-4 inline" /> Add Player
              </Button>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3">
              <Send className="mr-2 h-5 w-5 inline" /> Register Team
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}