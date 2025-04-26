import { useEffect, useState } from 'react';

export function DataAtual() {
    const [data, setData] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setData(new Date());
        }, 1000);

        return () => clearInterval(timer); // limpa o timer quando desmontar
    }, []);

    return <span>{data.toLocaleString()}</span>;
}