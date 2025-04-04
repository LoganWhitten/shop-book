interface DocumentLinksProps {
  links: { name: string; href: string; size: string }[]
}

export default function DocumentLinks({ links }: DocumentLinksProps) {
  return (
    <div>
      {links && links.length > 0 && (
        <div>
          <h4 className="font-medium mb-2">Documentation</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-colors text-left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{link.name}</span>
                  <span className="text-xs text-gray-400">{link.size}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

