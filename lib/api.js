const API_URL = 'https://www.datamarked.dk/?id=8016&apikey=7F39CE5E19D3F9413701DCF97D9F3E91897D9969222552C642229085587BAFF4';

export async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch products');
    
    const data = await response.json();
    
    return data.map(item => {
      const title = item.title.toUpperCase();
      let category = 'Andet';

      if (title.includes('IPHONE')) category = 'iPhone';
      else if (title.includes('IPAD')) category = 'iPad';
      else if (title.includes('MACBOOK PRO')) category = 'MacBook Pro';
      else if (title.includes('MACBOOK AIR')) category = 'MacBook Air';
      else if (title.includes('IMAC')) category = 'iMac';
      else if (title.includes('MAC MINI')) category = 'Mac Mini';
      else if (title.includes('MAC')) category = 'Mac';

      return {
        id: item.id || Math.random().toString(36).substr(2, 9),
        name: item.title,
        price: typeof item.price === 'string'
          ? parseFloat(item.price.replace(',', '.'))
          : item.price,
        image: item.image,
        link: item.link,
        description: item.description || '',
        long_description: item.long_description || item.description || '',
        category: category
      };
    });
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
}

export const CATEGORIES = ['Alle', 'MacBook Pro', 'MacBook Air', 'iMac', 'Mac Mini', 'iPhone', 'iPad'];
