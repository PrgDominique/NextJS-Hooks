import { useEffect, useState } from 'react'

type Name = {
  name: string
}

const about = () => {
  const [showData, setShowData] = useState<Name | undefined>()

  const getData = async () => {
    try {
      const uri = await fetch('http://localhost:3000/api/hello', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const response = await uri.json()
      setShowData(response)
    } catch (error) {}
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <div className='h-screen'>
      <div className='text-center justify-center  '>about</div>
      {showData && <div>{showData.name}</div>}
    </div>
  )
}

export default about
