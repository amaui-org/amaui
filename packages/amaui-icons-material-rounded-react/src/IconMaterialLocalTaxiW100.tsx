import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalTaxiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalTaxiW100'

      short_name='LocalTaxi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 19.7q-.15 0-.25-.1t-.1-.25V12.2l1.95-5.55q.05-.175.2-.263.15-.087.35-.087h-.05 3.45v-.65q0-.325.213-.538.212-.212.537-.212h2.2q.325 0 .538.212.212.213.212.538v.65h3.4q.15 0 .275.1.125.1.175.25l1.95 5.55v7.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.7H5v1.65q0 .15-.1.25t-.25.1Zm.65-8.2h13.4L17.1 7H6.9Zm-.3.7V17Zm2.4 3.4q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q7.825 13.6 7.4 13.6t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM5 17h14v-4.8H5Z"/>
    </Icon>
  );
});

IconMaterialLocalTaxiW100.displayName = 'AmauiIconMaterialLocalTaxiW100';

export default IconMaterialLocalTaxiW100;
