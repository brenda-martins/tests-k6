import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    stages: [
        { duration: '30s', target: 2 }, // below normal load
        { duration: '1m', target: 2 },
        { duration: '30s', target: 4 }, // normal load
        { duration: '1m', target: 4 },
        { duration: '30s', target: 6 }, // around the breaking point
        { duration: '1m', target: 6 },
        { duration: '30s', target: 8 }, // beyond the breaking point
        { duration: '1m', target: 8 },
        { duration: '30s', target: 0 }, // scale down. Recovery stage.
      ],
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1);
}