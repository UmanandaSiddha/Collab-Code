import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

interface MonacoEditorProps {
    language?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Editor: React.FC<MonacoEditorProps> = ({ language = 'javascript', value = '', onChange }) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const editorInstanceRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    useEffect(() => {
        if (editorRef.current) {
            editorInstanceRef.current = monaco.editor.create(editorRef.current, {
                value: value,
                language: language,
                theme: 'vs-dark',
            });

            editorInstanceRef.current.onDidChangeModelContent(() => {
                if (editorInstanceRef.current && onChange) {
                    const editorValue = editorInstanceRef.current.getValue();
                    onChange(editorValue);
                }
            });

            return () => {
                if (editorInstanceRef.current) {
                    editorInstanceRef.current.dispose();
                }
            };
        }
    }, [language, onChange]);

    useEffect(() => {
        if (editorInstanceRef.current && value !== editorInstanceRef.current.getValue()) {
            const currentValue = editorInstanceRef.current.getValue();
            if (value !== currentValue) {
                editorInstanceRef.current.setValue(value || '');
            }
        }
    }, [value]);

    return <div ref={editorRef} style={{ height: '100vh' }} />;
};

export default Editor;
