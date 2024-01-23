export const request = async (url, method, body, options) => {
    try {
      const res = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
        method: method,
      })
  
      if (!res.ok) {
        throw new Error(`API Call Fail: ${res}`)
      }
      return await res.json()
    } catch (e) {
      throw new Error(`Unexpected Error : ${e.message}`)
    }
  }

