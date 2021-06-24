import React from "react";
import tw from "twin.macro";

const Styles = tw.div`bg-red-400 text-white font-bold font-mont`;

const Test = ({ props, children }) => <Styles>{children}</Styles>;

export default Test;
