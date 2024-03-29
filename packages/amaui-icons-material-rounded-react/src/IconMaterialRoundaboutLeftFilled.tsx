import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoundaboutLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutLeftFilled'

      short_name='RoundaboutLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 21q-.425 0-.712-.288Q15 20.425 15 20v-5.1q0-.725.475-1.275.475-.55 1.2-.675 1.425-.225 2.375-1.337Q20 10.5 20 9q0-1.65-1.175-2.825Q17.65 5 16 5q-1.5 0-2.613.95-1.112.95-1.337 2.375-.125.725-.675 1.2T10.1 10H5.825l.9.9q.3.3.288.7-.013.4-.313.7-.3.275-.7.287-.4.013-.7-.287L2.7 9.7q-.15-.15-.212-.325Q2.425 9.2 2.425 9t.063-.375Q2.55 8.45 2.7 8.3l2.6-2.6q.275-.275.688-.288Q6.4 5.4 6.7 5.7q.275.275.275.7 0 .425-.275.7l-.875.9h4.25q.35-2.15 2.013-3.575Q13.75 3 16 3q2.5 0 4.25 1.75T22 9q0 2.25-1.425 3.912Q19.15 14.575 17 14.925V20q0 .425-.288.712Q16.425 21 16 21Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutLeftFilled.displayName = 'AmauiIconMaterialRoundaboutLeftFilled';

export default IconMaterialRoundaboutLeftFilled;
