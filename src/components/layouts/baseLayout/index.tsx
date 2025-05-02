import styles from "./style.module.css";

type Props = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: Props) => {
  return (
    <div className={styles.base}>
      <div className={styles.pageLayout}>{children}</div>
    </div>
  );
};
