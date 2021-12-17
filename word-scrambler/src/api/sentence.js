import data from './sentence.json'

const baseUrl = 'https://api.hatchways.io/assessment/sentences'

export const fetchSentences = async ( count ) => {
  try {
    const res = await fetch(`${baseUrl}/${count}`);
    return await res.json()

  } catch (error) {
    return error
  }
}

export const fetchFakeSentences = async ( ) => {
  try {
    return await Promise.resolve(data);

  } catch (error) {
    return error
  }
}