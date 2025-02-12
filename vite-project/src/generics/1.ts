import axios from 'axios';

async function fetchData<J>(url:string):Promise<J> {
  try {
      const response = await axios.get<J>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
    }
}

// console.log(fetchData('testString'));

