export default function Label({ children, className = '' }) {
  return <div className={`label${className ? ` ${className}` : ''}`}>{children}</div>;
}
