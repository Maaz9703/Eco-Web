import { View } from "react-native";
import React from "react";

import { svg } from "../svg";

type Props = {
    item: any;
};

const Sale: React.FC<Props> = ({ item }) => {
    return (
        item.promo_categories.includes("Sale") && (
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                }}
            >
                <svg.SaleSvg />
            </View>
        )
    );
};

export default Sale;
