import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaxiAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaxiAlertW100Filled'

      short_name='TaxiAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.5q-.15 0-.25-.1t-.1-.25V13l1.95-5.55q.05-.175.188-.263.137-.087.312-.087H9.2v-.65q0-.325.213-.538.212-.212.537-.212h1.4q-.075.525-.05 1.05.025.525.15 1.05H5.9l-1.6 4.5h11q.525.225 1.075.312.55.088 1.125.088h.525q.25 0 .525-.05l.15.35v7.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V18.5H4v1.65q0 .15-.1.25t-.25.1Zm2.75-4.1q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q6.825 14.4 6.4 14.4t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm1.9-6.2q-1.55 0-2.625-1.075T13.8 6.5q0-1.55 1.075-2.625T17.5 2.8q1.55 0 2.625 1.075T21.2 6.5q0 1.55-1.075 2.625T17.5 10.2Zm0-3.2q.15 0 .25-.1t.1-.25v-2q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2q0 .15.1.25t.25.1Zm0 1.8q.2 0 .325-.125t.125-.325q0-.2-.125-.325T17.5 7.9q-.2 0-.325.125t-.125.325q0 .2.125.325t.325.125Z"/>
    </Icon>
  );
});

IconMaterialTaxiAlertW100Filled.displayName = 'AmauiIconMaterialTaxiAlertW100Filled';

export default IconMaterialTaxiAlertW100Filled;
