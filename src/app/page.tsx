'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useState } from 'react'
import Card from './components/Card'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [username, setUsername] = useState<string>("")
  const [userData, setUserData] = useState([])

  const handleFetch = () => {
    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://api.github.com/users/${username}/repos`, requestOptions)
      .then(response => response.json())
      .then(result => setUserData(result))
      .catch(error => console.log('error', error));
  }

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleFetch}>Search</button>
      <div className="">
        {
          userData.map((item: any, index: number) => (
            <Card
              reponame={item.name}
              visibility={item.visibility}
              forks={item.forks_count}
              stars={item.stargazers_count}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}
