import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSolarPowerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerFilled'

      short_name='SolarPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 3q0 .425-.287.712Q5.425 4 5 4H4q-.425 0-.712-.288Q3 3.425 3 3t.288-.713Q3.575 2 4 2h1q.425 0 .713.287Q6 2.575 6 3ZM4.45 22H11v-4H2.8l-.325 1.6q-.2.95.413 1.675Q3.5 22 4.45 22ZM7.525 6.5q.3.3.3.713 0 .412-.3.712l-.7.7q-.275.275-.687.275-.413 0-.713-.275-.3-.3-.3-.713 0-.412.3-.712l.7-.7q.275-.275.687-.275.413 0 .713.275ZM3.2 16H11v-4H5.65q-.725 0-1.287.45-.563.45-.688 1.15ZM12 7Q9.925 7 8.463 5.537 7 4.075 7 2h10q0 2.075-1.462 3.537Q14.075 7 12 7Zm0 1q.425 0 .713.287Q13 8.575 13 9v1q0 .425-.287.712Q12.425 11 12 11t-.712-.288Q11 10.425 11 10V9q0-.425.288-.713Q11.575 8 12 8Zm1 14h6.55q.95 0 1.563-.725.612-.725.412-1.675L21.2 18H13Zm0-6h7.8l-.475-2.4q-.125-.7-.687-1.15-.563-.45-1.288-.45H13Zm3.475-9.5q.275-.275.7-.275.425 0 .7.275l.7.7q.3.3.313.7.012.4-.288.7-.3.3-.712.3-.413 0-.713-.3l-.7-.7q-.275-.3-.287-.7-.013-.4.287-.7ZM21 3q0 .425-.288.712Q20.425 4 20 4h-1q-.425 0-.712-.288Q18 3.425 18 3t.288-.713Q18.575 2 19 2h1q.425 0 .712.287Q21 2.575 21 3Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerFilled.displayName = 'AmauiIconMaterialSolarPowerFilled';

export default IconMaterialSolarPowerFilled;
