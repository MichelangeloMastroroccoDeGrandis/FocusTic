import { Dimensions } from "react-native";

const Responsive = ({Width, Height}) => {
    const { width, height } = Dimensions.get('window');
    const ResponsiveWidth = 0;
    const ResponsiveHeight = 0;

    if(!Height) {
        return ResponsiveWidth = width * Width;
    }

    if(!Width) {
        return ResponsiveHeight = height * Height;
    }

    if(Width && Height) {
        return {
            ResponsiveWidth: width * Width,
            ResponsiveHeight: height * Height
        }
    }
}

export default Responsive;