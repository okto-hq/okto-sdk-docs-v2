'use client';

import { useEffect, useState } from "react";
import { LLMCopyButton, ViewOptions } from "./ai/page-actions";

export interface AIMarkdownComponentProps {
    isIndex: boolean
}

export default ( {isIndex}: AIMarkdownComponentProps ) => {

    const [pathName, setPathName] = useState('');
    // const [pathPath, setPagePath] = useState('');

    useEffect(() => {
        if (isIndex){
            setPathName(window.location.pathname.replace('/docs/', '/llm/'))
        } else {
            setPathName(window.location.pathname.replace('/docs/', '/llm/') + '.md');
        }
    }, []);

    return (
        <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
            <LLMCopyButton markdownUrl={pathName} />
            <ViewOptions
                markdownUrl={pathName}
                githubUrl={`https://github.com/okto-hq/okto-sdk-docs-v2/blob/main/content/docs/default`}
            />
        </div>
    )
}