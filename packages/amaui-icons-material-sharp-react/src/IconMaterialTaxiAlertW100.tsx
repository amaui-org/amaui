import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaxiAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaxiAlertW100'

      short_name='TaxiAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.5V13l2.075-5.9H9.2V5.7h2.15q-.075.525-.05 1.05.025.525.15 1.05H5.9l-1.6 4.5h11q.525.225 1.075.312.55.088 1.125.088h.525q.25 0 .525-.05l.15.35v7.5H18v-2H4v2ZM4 13v4.8Zm2.4 3.4q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q6.825 14.4 6.4 14.4t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.712q-.287-.288-.712-.288t-.712.288q-.288.287-.288.712t.288.712q.287.288.712.288Zm1.9-6.2q-1.55 0-2.625-1.075T13.8 6.5q0-1.55 1.075-2.625T17.5 2.8q1.55 0 2.625 1.075T21.2 6.5q0 1.55-1.075 2.625T17.5 10.2ZM17.15 7h.7V4.3h-.7Zm.35 1.8q.2 0 .325-.125t.125-.325q0-.2-.125-.325T17.5 7.9q-.2 0-.325.125t-.125.325q0 .2.125.325t.325.125ZM4 17.8h14V13H4Z"/>
    </Icon>
  );
});

IconMaterialTaxiAlertW100.displayName = 'AmauiIconMaterialTaxiAlertW100';

export default IconMaterialTaxiAlertW100;
