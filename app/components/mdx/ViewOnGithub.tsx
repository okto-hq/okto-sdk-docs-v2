import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

interface ViewOnGithubProps {
    url: string;  // Required URL parameter
    text?: string; // Optional text parameter
}

export default function ViewOnGithub({ url, text = "View on Github" }: ViewOnGithubProps) {
    return (
        <div style={{ textAlign: "right", fontSize: "13px", margin: "0", padding: "0", marginTop: "-1rem"}}>
            <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black dark:text-zinc-200 font-medium no-underline"
            >
                <FaGithub className="mr-2" />
                {text}
            </Link>
        </div>
    );
}