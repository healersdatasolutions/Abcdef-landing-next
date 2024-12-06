export async function fetchSocialData() {
    try {
      const response = await fetch('/api/social-data');
      if (!response.ok) {
        throw new Error('Failed to fetch social data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching social data:', error);
      return null;
    }
  }
  
  