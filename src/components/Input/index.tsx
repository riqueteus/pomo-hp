import styles from './styles.module.css';

type InputProps = {
    type: string;
    label: string;
    id: string;
} & React.ComponentProps<'input'>;

export function Input({ type, label, id, ...props }: InputProps) {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input type={type} id={id} className={styles.input} {...props} />
        </div>
    );
}