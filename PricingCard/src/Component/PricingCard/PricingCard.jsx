import styles from 'pricingcard.module.css';

function PricingCard({ label, priceLabel, image, imageAlt }) {
  return (
    <div className={styles.pricingCard}>
      <span className={styles.card_label}>{label}</span>
      <div className={styles.card_image}>
        <img src={image} alt={imageAlt} />
      </div>
      <span className={styles.card_priceLabel}>{priceLabel}</span>
      <span>Everything in Free, Plus</span>
      <ul className={styles.card_benefits}>
        <li className={styles.card_benefits}>Upto 10 Users</li>
        <li className={styles.card_benefits}>Email Support, Call Support</li>
        <li className={styles.card_benefits}>1 Year Access</li>
      </ul>
      <button className={styles.card_button}>
        
      </button>
    </div>
  );
}

export default PricingCard;
