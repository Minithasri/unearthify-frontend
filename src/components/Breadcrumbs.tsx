import { Link, useLocation, useParams } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

const categoryMap: Record<string, string> = {
  "art-forms": "Art Forms",

  dance: "Dance",
  paint: "Paint",
  music: "Music",
  drama: "Drama",
  sculpture: "Sculpture",
  martial: "Martial Arts",
};

export default function Breadcrumbs() {
  const location = useLocation();
  const params = useParams<{ title?: string }>();

  let pathnames = location.pathname.split("/").filter(Boolean);

  // Auto prepend art-forms for any category page
  const firstSegment = pathnames[0];
  if (categoryMap[firstSegment] && firstSegment !== "art-forms") {
    pathnames = ["art-forms", ...pathnames];
  }

  const breadcrumbs: BreadcrumbItem[] = pathnames.map((segment, index) => {
    let label = categoryMap[segment];

    if (!label) {
      label = segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    }

    // Dynamic title
    if (params.title && segment === params.title) {
      label = params.title
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
    }

    const to = "/" + pathnames.slice(0, index + 1).join("/");

    return { label, to };
  });

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ol className="flex items-center gap-1">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>

        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-1">/</span>
            {index === breadcrumbs.length - 1 ? (
              <span className="font-semibold text-gray-900">{item.label}</span>
            ) : (
              <Link to={item.to} className="hover:underline">{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
