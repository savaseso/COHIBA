import React, {Component} from 'react'
import Layout from './Layout'
import styled from 'styled-components'

const Background = styled.div`
background-color:#2b2b2b;
`

const ContentWrapper = styled.div`
    width:700px;
    margin:auto;
    color:#fff;
    opacity:0.8;
    text-align:justify;
    @media (max-width: 768px) {
    width:500px;
    }
    @media (max-width: 501px) {
    width:320px;
    }
`
const Heading = styled.h4`
    text-align:left;
    padding-left:1rem;
`
const Paragraph = styled.p`
    padding:10px;
    opacity:0.7;
`

class TermsConditions extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
    return (
        <Layout>
            <Background>
                <ContentWrapper>
                    <h1 style={{textAlign:"center",paddingTop:"2rem"}}>Terms{' '}&amp;{' '}Conditions</h1>
                    <Paragraph>
                        Please be aware that by accessing and using this website, you accept these all terms
                        and conditions below.
                        If you do not agree these terms and conditions or any part of them, do not use this
                        website.</Paragraph>
                    <Heading>Article 1:</Heading>
                        <Paragraph>You must be at least 21 years of age to use this website. (Exception: 21 years of age is a general limitation. Every country has a different legal age for consumption of tobacco products. The buyer must be at or over the legal age in their residential country)</Paragraph>
                    <Heading>Article 2:</Heading>
                        <Paragraph> If you want free shipping....The minimum amount of the shopping cart must be USD 199 per order.</Paragraph>
                    <Heading>Article 3:</Heading>
                        <Paragraph>All orders are subject to confirmation by Cohibatoronto, Cohibatoronto reserves the right to cancel or refuse any order for any reason. Once the buyer places an order, an email related to acception of the order will be sent by system automatically but it should not be considered “confirmed” until we have verified with the warehouse that we still have the item(s) in stock. If Cohibatoronto has the item(s) at the time of purchase, we will send you a confirmation email but If we do not have the item(s) in stock, we will inform you.</Paragraph>
                    <Heading>Article 4: </Heading>
                        <Paragraph>Cigars are checked for the shipping process. Shipping will be provided by international postal or courier services and takes between 7 and 20 days to be delivered depending on your country and destination city. Delivery period might extend due to customs clearance delays, extreme weather situations, local postal errors etc. (please see Shipping and Return for details.) Delays are not under our control so we are not responsible for delays.</Paragraph>
                    <Heading>Article 5: </Heading>
                        <Paragraph>Our aim is your satisfaction. In case you are not satisfied with your order, you should contact us within 14 days of receiving your order . Coloration of cigars or taste is not a reason for return. If you are not sure of what product you want to buy, contact us for advice or information before placing an order.</Paragraph>
                    <Heading>Article 6: </Heading>
                        <Paragraph>In case of wrong or missing delivery, please contact us with your order number within 14 days. Goods must be returned undamaged, vacuum-sealed in their original packaging and by unit of packaging. Buyer bears the shipping cost for return.. Please contact us for details.</Paragraph>
                    <Heading>Article 7: </Heading>
                        <Paragraph>We selling Cuban cigars only.</Paragraph>
                    <Heading>Article 8: </Heading>
                        <Paragraph>We do not ship Cuban Cigars to the US. Please contact at cohibatoronto@gmail.com</Paragraph>
                    <Heading>Article 9: </Heading>
                        <Paragraph>We do not ship Cuban Cigars to Turkey. Please contact at cohibatoronto@gmail.com</Paragraph>
                    <Heading>Article 10:</Heading>
                        <Paragraph>Cohibatoronto.com does not assume ANY RESPONSIBILITY for ANY DUTIES, TARIFFS, TAXES, CUSTOMS or BROKERAGE FEES, delayed shipments or any further inconveniences caused by domestic Customs offices Cohibatoronto.com is not in a position to be fully aware of all regulations pertaining to customs offices all over the world hence assumes that each Buyer is fully aware of the conditions and regulations applied by his/her domestic customs system.</Paragraph>
                    <Heading>Article 11:</Heading>
                        <Paragraph>Please be aware that Cohibatoronto is only responsible for paying taxes in countries where we process shipments.</Paragraph>
                    <Heading>Article 12:</Heading>
                        <Paragraph> For Cuban Cigars only;
                                        All customers should be aware of their local customs law.
                                        In case your order gets held or confiscated at customs we will not be able to refund you. If the package returns back to us we will be refunding the product cost only. Shipping fees will not be refunded.</Paragraph>
                    <Heading>Article 13:</Heading>
                        <Paragraph>This Agreement is governed in accordance with the laws of Canada. Any
                                        disputes relating to these terms and conditions shall be subject to the exclusive
                                        jurisdiction of the courts of Canada.SHIPPING
                                        Shippings are being completed in 1-7 business days after you receive a confirmation
                                        e-mail for your payment. (If we were out of stock at the time of payment for any
                                        reason, Cohibatoronto provides you two solutions as waiting for product to arrive in
                    stock or a refund.)</Paragraph>
                    <Heading>Please note that:</Heading>
                        <Paragraph>Cuban Cigars are directly being shipped from Official Importer of Habanos SA It
                                        might take 1-7 days to ship due to dispatch from bonded warehouse.
                                        There are two types of shippings for Cigars;
                                        1. Registered Mail: Standard registered mail with tracking. It takes longer than 20
                                        days for delivery to destination country.
                                        2. Express Mail Service: Registered express mail with tracking. It takes around 5-20
                                        days for delivery to destination country.
                                        Please note that; “delivery to destination country” states for entry to destination
                                        COUNTRY not to the BUYER because we do not have any information about delivery
                                        time for local postal service.
                                        Delivery dates are general information for both shipment alternatives. It does not
                                        state an exact delivery date. This period depends on destination local postal service
                                        workload, customs clearance delays, extreme weather situations, local postal errors
                                        and delayed deliveries.
                                        You cannot see the real-time movements of your parcel as these shipments are
                                        carried out by national post services (Not like FedEx, DHL and UPS).
                                        Our shipments are guaranteed against damage and loss. In case of your parcel has
                                        
                                        not arrived in 40 days, packages will be considered as lost and immediately re-
                                        shipped. The International Postal Rules consider a shipment as a lost item if the
                                        
                                        shipment has not arrived within 40 days after it has shipped.
                                        For worldwide shippings, In case your order is not delivered within a month or
                                        longer, will be considered lost and replaceable as of one month after the shipping
                                        date in accordance with International Postal protocol. Please note, no replacements
                                        will be shipped before the one month time frame has been passed.
                                        cohibatoronto.com cannot be held responsible for delays caused by human error
                                        (incorrect information (e.g.: address or buyer name)
                                        Cohibatoronto.com is not responsible for paying any taxes or duties involved in the
                                        importation of his/her order into his/her country (Buyer is responsible for knowing
                                        her/his local laws).
                                        Please be aware that your delivery may also be subject to customs duties, over
                                        which we have no control, and which MUST be borne by you.
                                        
                                        For shipments with status “In-Transit” we will be waiting for re-shipment until the
                                        status is updated. We cannot accept Refund and Re-Shipment requests for orders
                                        with status “In-Transit”.You can also type your tracking number and check your
                                        order's status on this links; www.canadapost.ca</Paragraph>
                    <Heading>RETURN</Heading>
                                    <Paragraph> Our aim is your satisfaction. In case you are not satisfied with your order, you
                                        should contact us within 14 days of receiving your order. Coloration of cigars or
                                        taste is not a reason for return. In case of wrong or missing delivery, please contact
                                        us with your order number within 14 days. Goods must be returned undamaged,
                                        vacuum-sealed in their original packaging and by unit of packaging. Buyer bears the
                                        shipping cost for return. Please contact us for details.
                                        When an order returns us, we will re-ship your package immediately as our main
                                        idea is to provide you top quality cigars in any case. Re-shipments are not sent out
                                        before package returns us and checked (damage, quantity, different product,
                                        original packing etc.) by our team.
                                        If your re-shipped package is also not delivered to you we will refund your payment.
                                        ( please see Refund section below)RESHIP
                                        Our shipments are guaranteed against damage and loss.
                                        The International Postal Rules consider a shipment as a lost item if the shipment has
                                        not arrived within 40 days after it has shipped.
                                        In case of your parcel has not arrived in 40 days (This period depends on
                                        destination local postal service workload, customs clearance delays, extreme
                                        weather situations, local postal errors and delayed deliveries.), packages will be
                                        considered as lost and immediately re-shipped.
                                        You can upgrade to Express Mail Service for your re-shipment if you chose
                                        International Registered Mail at first by accepting to pay price difference.
                                        Please note that: If your item is not delivered to you and sent back to us by postal
                                        service due to customers faults (wrong address, wrong name, zip code etc.),
                                        customers will need to bear the shipping fee in order for us to re-ship.REFUND
                                        In order to receive a refund for your order;
                                        1. Ordered product must be out of stock at the time of payment. (Full Refund)
                                        2. If customer wants to cancel order after completion of payment, a partial refund is
                                        being made due to refund fee being deducted from your payment, which is applied
                                        by payment provider. This amount differs from the payment method you choose.
                                        3. Cohibatoronto will re-ship a new package if it's required. Otherwise
                                        Cohibatoronto will refund product price deducting shipping fees.CANCELLATION
                                        If customer wants to cancel order just send email to cohibatoronto@gmail.com
                                        about your cancel request. Your request will be done asap.
                                        CHARGEBACK POLICY
                                        In order for a customer to ask for a chargeback from their bank, Cohibatoronto
                                        should not be obeying any of the rules stated above and this situation must be
                                        proved by valid documents to customers’ own bank. Any fraud attempts are subject
                                        to legal action taken by Cohibatoronto and its legal representatives against
                                        responsible individuals.Please be aware that by accessing and using this website,
                                        you accept these all terms and conditions above.
                                        If you do not agree these terms and conditions or any part of them, do not use this
                                        website.
                                        For any assistance,comments or recommendations, please contact us at
                                        cohibatoronto@gmail.com
                                        All messages must be written in English.
                    </Paragraph>

                </ContentWrapper>
            </Background>
        </Layout>
    )
}}
export default TermsConditions