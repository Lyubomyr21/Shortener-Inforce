import React, { useEffect} from 'react';
import axios from 'axios';

const LinkRedirect = () => {
    
      useEffect(() => {
        const getLongLink = async () => {
            const token = window.location.href.split('/').pop();
            const response = await axios.get(`${process.env.REACT_APP_API}LinksShortener/${token}`);
            window.location.replace(response.data.longLink)
        }
        getLongLink();
    }, [])

    return (
        <div>
          <h1>Redirecting..</h1>
        </div>
    );
 };

export default LinkRedirect;

