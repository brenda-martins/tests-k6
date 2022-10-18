import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    stages: [
        { duration: '10s', target: 3 }, // below normal load
        { duration: '30s', target: 3 },
        { duration: '10s', target: 16 }, // peak
        { duration: '1m', target: 16 },
        { duration: '10s', target: 3 }, // ramp-down
        { duration: '1m', target: 3 },
        { duration: '30s', target: 0 },
      ],
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1);
}