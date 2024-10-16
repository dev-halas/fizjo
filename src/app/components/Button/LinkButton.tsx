import styles from './Button.module.css';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  noArrow?: boolean;
  color?: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, href, noArrow = false, color = '--dark', className = '', target = '_self', rel }) => {
  const relValue = target === '_blank' && !rel ? 'noopener noreferrer' : rel;

  const renderArrow  =() => {
    if(noArrow) {
      return;
    }

    return(
      <div className={styles.arrowRight}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" style={{ fill: `var(${color})` }}>
          <path d="M1.28138 0.534961L1.23406 2.95142L11.9871 2.74064L0.324889 14.4028L2.00014 16.0781L13.6623 4.41589L13.4515 15.1688L15.8679 15.1215L16.1597 0.243168L1.28138 0.534961Z"/>
        </svg>
      </div>
    );
  }

  return (
    <a
      href={href}
      className={`${styles.button} ${className}`} 
      target={target}
      rel={relValue}
      style={{
        color: `var(${color})`
      }}
    >
      <span>{children}</span>
      {renderArrow()}
    </a>
  );
};

export default LinkButton;
