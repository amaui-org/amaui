import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsCarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsCarW100'

      short_name='DirectionsCar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17.7v1.675q0 .125-.1.225t-.25.1q-.15 0-.25-.1t-.1-.25V12.2l1.95-5.55q.05-.175.2-.263.15-.087.35-.087h10.5q.15 0 .275.1.125.1.175.25l1.95 5.55v7.175q0 .125-.1.225t-.25.1q-.15 0-.25-.1t-.1-.25V17.7Zm.3-6.2h13.4L17.1 7H6.9Zm-.3.7V17Zm2.4 3.4q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q7.825 13.6 7.4 13.6t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM5 17h14v-4.8H5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsCarW100.displayName = 'AmauiIconMaterialDirectionsCarW100';

export default IconMaterialDirectionsCarW100;
