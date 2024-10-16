import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  noArrow?: boolean;
  color?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, noArrow = false, color = '--dark', className = '', disabled = false, type = 'button' }) => {
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
    <button
      type={type}
      className={`${styles.button} ${className}`} 
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      {renderArrow()}
    </button>
  );
};

export default Button;
