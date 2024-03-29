import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Commute'

      short_name='Commute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20v-6.35L11.625 9h8.75L22 13.65V20h-2v-1.5h-8V20Zm2-7.5h8l-.7-2h-6.6Zm-.5 1.5v3Zm1.5 2.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q13.425 14.5 13 14.5t-.712.287Q12 15.075 12 15.5t.288.712q.287.288.712.288Zm6 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q19.425 14.5 19 14.5t-.712.287Q18 15.075 18 15.5t.288.712q.287.288.712.288ZM4 20v-1l1-1q-1.25 0-2.125-.875T2 15V7q0-1.65 1.475-2.325Q4.95 4 8.5 4q3.7 0 5.1.65Q15 5.3 15 7v1h-2V7H4v6h5v7Zm1-4q.425 0 .713-.288Q6 15.425 6 15t-.287-.713Q5.425 14 5 14t-.713.287Q4 14.575 4 15t.287.712Q4.575 16 5 16Zm6.5 1h9v-3h-9Z"/>
    </Icon>
  );
});

IconMaterialCommute.displayName = 'AmauiIconMaterialCommute';

export default IconMaterialCommute;
