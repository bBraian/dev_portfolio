import { m } from "framer-motion";

// Fades content up once when it enters the viewport.
export function Reveal({ as = "div", delay = 0, className, children, ...props }) {
  const Component = m[as];
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
