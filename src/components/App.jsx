import { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  async function fetchDog() {
    setLoading(true);

    try {
      const response = await fetch(
        'https://dog.ceo/api/breeds/image/random'
      );
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Failed to fetch dog image:', error);
      setDogImage('');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <main>
      <h1>Random pictures of cool dogs 😎</h1>

      {loading && <p>Loading...</p>}

      {!loading && dogImage && (
        <img src={dogImage} alt="Cool dog wearing sunglasses 😎" />
      )}

      <button onClick={fetchDog}> New Dog </button>
    </main>
  );
}

export default App;