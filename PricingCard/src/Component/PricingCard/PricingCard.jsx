import styles from 'pricingcard.module.css';

function PricingCard({ label, priceLabel, image, imageAlt }) {
  return (
    <div className={styles.pricingCard}>
      <span className={styles.card_label}>{label}</span>
      <div className={styles.card_image}>
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
}

export default PricingCard;
