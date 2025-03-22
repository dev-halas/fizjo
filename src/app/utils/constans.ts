

const ALLOWED_HTML_TAGS = ["p", "strong", "a", "ul", "li", "em", "br", "h1", "h2", "h3", "h4", "h5", "h6", "span"]
const ALLOWED_HTML_ATTRIBUTES = {
  a: ["href", "target", "rel", "class"],
  span: ["style", "class"]
}

export const SANITIZE_OPTIONS = {
  allowedTags: ALLOWED_HTML_TAGS,
  allowedAttributes: ALLOWED_HTML_ATTRIBUTES,
}