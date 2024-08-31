import styles from 'pricingcard.module.css'

export default PricingCard({
    label,
    priceLabel,
    image,imageAlt
}) {
    return( 
        <div>
        <span>{label}</span>
        <div>
        <img src={image} alt={imageAlt} />
        </div>
        </div>
    )
}
    
       

