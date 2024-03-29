import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamStandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStandFilled'

      short_name='NestCamStand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-.875 0-1.475-.65-.6-.65-.525-1.525l.6-7.025q.175-2.125 1.375-3.75t3.05-2.425q.15-1.125.988-1.875Q10.85 3 12 3q1.15 0 1.988.737.837.738.987 1.863 1.85.8 3.063 2.437Q19.25 9.675 19.4 11.8l.6 7.025q.075.875-.525 1.525-.6.65-1.475.65Zm6-10q.425 0 .713-.288Q13 10.425 13 10V6q0-.425-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6v4q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialNestCamStandFilled.displayName = 'AmauiIconMaterialNestCamStandFilled';

export default IconMaterialNestCamStandFilled;
