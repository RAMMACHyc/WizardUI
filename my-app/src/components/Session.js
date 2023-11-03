
import { getCategory } from '../Data/data';

export const Session = (catId, sessionId) => {
    const category = getCategory(catId);
  
    if (category) {
      const session = category.sessions.find(session => session.id === sessionId);
      console.log(session);
  
    }
  
  
    return null; 
  };