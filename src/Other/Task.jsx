import React, { useState } from 'react'

const Task = () => {
    const [name, setName] = useState('') // Single state for name
    const [friendsList, setFriendsList] = useState([]) // Array for the list of friends
    const gifts = ['sonpapdi', 'sweets', 'rockets', 'chakkar'] // List of gifts
    const [gift, setGift] = useState('no gifts assigned') // State for the gift

    const handleChangeInput = (e) => {
        setName(e.target.value)  // Update the name
    }

    const addFriend = () => {
        if (name) {  // Only add if name is not empty
            setFriendsList([...friendsList, `${name} (${gift})`])  // Add the name and gift to the friends list
            setName('')  // Reset the input field
            setGift('no gifts assigned') // Reset the gift field
        }
    }

    const removeFriend = (index) => {
        const updatedList = friendsList.filter((_, i) => i !== index)
        setFriendsList(updatedList) // Remove a friend from the list by index
    }

    const assignGift = () => {
        const randomGift = gifts[Math.floor(Math.random() * gifts.length)]
        setGift(randomGift) // Assign a random gift
    }

    const shuffleGifts = () => {
        const shuffledList = friendsList.map(friend => {
            const randomGift = gifts[Math.floor(Math.random() * gifts.length)]
            return friend.split(' ')[0] + ` (${randomGift})`
        })
        setFriendsList(shuffledList) // Shuffle gifts among friends
    }

    const resetFriendsList = () => {
        setFriendsList([]) // Reset the list of friends
        setName('') // Reset the name field
        setGift('no gifts assigned') // Reset the gift field
    }

    return (
        <div>
            <div className='flex items-center justify-center mt-4'>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your friend's name"
                        onChange={handleChangeInput}
                        value={name}
                        className='border rounded-md'
                    />
                    <button className='p-2 border rounded-md' onClick={addFriend}>Add</button>

                    <ul>
                        {friendsList.map((friend, index) => (
                            <div className='flex gap-3' key={index}>
                                <li className='text'>{friend}</li>
                                <button className='bg-gray-100 border border-black' onClick={() => removeFriend(index)}>Remove</button>
                            </div>
                        ))}
                    </ul>

                    <div className='buttons flex gap-4 mt-4'>
                        <button className='bg-gray-100 border border-black' onClick={assignGift}>
                            Assign gift
                        </button>
                        <button className='bg-gray-100 border border-black' onClick={resetFriendsList}>
                            Reset
                        </button>
                        <button className='bg-gray-100 border border-black' onClick={shuffleGifts}>
                            Shuffle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
