import { Defs, G, Path, Svg, SvgProps } from "react-native-svg";

export const BackIcon = (props:SvgProps) => {
    return (
        <Svg
          width={15}
          height={26}
          viewBox="0 0 15 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M12.5 25.5L0 13 12.5.5l2.219 2.219L4.438 13l10.28 10.281L12.5 25.5z"
            fill="#f5da42"
          />
        </Svg>
      )
}


export const MenuIcon = (props:SvgProps) => {
    return (
        <Svg
          width={30}
          height={22}
          viewBox="0 0 30 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <G filter="url(#filter0_d_9_22)" stroke="#f5da42" strokeWidth={2}>
            <Path d="M7 2L27 2" />
            <Path d="M7 7L27 7" />
            <Path d="M7 12L27 12" />
          </G>
          <Defs></Defs>
        </Svg>
      )
}


export const UpIcon = (props:SvgProps) => {
    return (
        <Svg
          width={64}
          height={64}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M12.192 9.23l3.714 4.458A.8.8 0 0115.292 15H8.708a.8.8 0 01-.615-1.312l3.715-4.458a.25.25 0 01.384 0z"
            fill="#222"
          />
        </Svg>
      )
}


export const HomeIcon = (props:SvgProps) => {
    return (
        <Svg
          width={28}
          height={28}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <Path
            d="M0 8c0-3.771 0-5.657 1.172-6.828C2.343 0 4.229 0 8 0h2c3.771 0 5.657 0 6.828 1.172C18 2.343 18 4.229 18 8v2c0 3.771 0 5.657-1.172 6.828C15.657 18 13.771 18 10 18H8c-3.771 0-5.657 0-6.828-1.172C0 15.657 0 13.771 0 10V8z"
            fill="#222"
          />
        </Svg>
      )
}


export const PlusIcon = (props: SvgProps) => {
  return (
    <Svg
      width="54px"
      height="54px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="#f5da42"
      stroke="#f5da42"
      {...props}
    >
      <Path
        d="M488 1106h-5v5a1.001 1.001 0 01-2 0v-5h-5a1.001 1.001 0 010-2h5v-5a1.001 1.001 0 012 0v5h5a1.001 1.001 0 010 2zm-6-17c-8.837 0-16 7.16-16 16s7.163 16 16 16 16-7.16 16-16-7.163-16-16-16z"
        transform="translate(-466 -1089)"
        fill="#f5da42"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  )
}