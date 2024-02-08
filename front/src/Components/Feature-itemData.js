import React from "react";
import Chat from "../Icones/icon-chat.webp";
import Money from "../Icones/icon-money.webp";
import Security from "../Icones/icon-security.webp";
import FeatureItem from "./Feature-item";

function FeatureItemData() {
    return (
        <>
            <FeatureItem
                img={Chat}
                h3="You are our #1 priority"
                p= "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem
                img={Money}
                h3="More savings means higher rates"
                p= "The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
                img={Security}
                h3="Security you can trust"
                p= "We use top of the line encryption to make sure your data and money is always safe."
            />
        </>
    );
};

export default FeatureItemData;