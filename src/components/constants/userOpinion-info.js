import { v4 } from "uuid";

export const CARDS_OPINIONS = [
    {
        id:v4(),
        name:'Colton Smith',
        text:'“We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”',
        img:'public/assets/images/image-colton.jpg'
    },
    {
        id:v4(),
        name:'Irene Roberts',
        text:'“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
        img:'public/assets/images/image-irene.jpg'
    },
    {
        id:v4(),
        name:'Anne Wallace',
        text:'“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”',
        img:'public/assets/images/image-anne.jpg'
    }
]

export default CARDS_OPINIONS;