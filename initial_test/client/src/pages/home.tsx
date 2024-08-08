import { Editor } from '@monaco-editor/react';
import { useState } from 'react';

const HomePage = () => {

    const [code, setCode] = useState<string>();
    const [theme, setTheme] = useState('vs-dark');
    const [language, setLanguage] = useState<string>("javascript");

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <button onClick={() => console.log(code)}>Print</button>
            <Editor height="100vh" defaultLanguage={language} theme='vs-dark' defaultValue={code} onChange={(value) => setCode(value)} />
        </div>
    )
}

export default HomePage;