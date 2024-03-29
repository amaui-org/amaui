import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamStand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStand'

      short_name='NestCamStand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-.875 0-1.475-.65-.6-.65-.525-1.525l.6-7.025q.175-2.125 1.375-3.75t3.05-2.425q.15-1.125.988-1.875Q10.85 3 12 3q1.15 0 1.988.737.837.738.987 1.863 1.85.8 3.063 2.437Q19.25 9.675 19.4 11.8l.6 7.025q.075.875-.525 1.525-.6.65-1.475.65Zm0-2h12l-.6-7q-.1-1.3-.737-2.363Q16.025 8.575 15 7.9V10q0 1.25-.875 2.125T12 13q-1.25 0-2.125-.875T9 10V7.925Q8 8.6 7.363 9.662 6.725 10.725 6.6 12L6 19Zm6-8q.425 0 .713-.288Q13 10.425 13 10V6q0-.425-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6v4q0 .425.288.712.287.288.712.288Zm0 2Z"/>
    </Icon>
  );
});

IconMaterialNestCamStand.displayName = 'AmauiIconMaterialNestCamStand';

export default IconMaterialNestCamStand;
