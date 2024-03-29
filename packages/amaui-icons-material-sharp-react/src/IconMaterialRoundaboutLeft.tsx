import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoundaboutLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutLeft'

      short_name='RoundaboutLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 21v-8h1q1.675 0 2.837-1.175Q20 10.65 20 9q0-1.65-1.175-2.825Q17.65 5 16 5q-1.65 0-2.825 1.175Q12 7.35 12 9v1H5.825l1.6 1.6L6 13 2 9l4-4 1.4 1.4L5.825 8h4.25q.35-2.15 2.013-3.575Q13.75 3 16 3q2.5 0 4.25 1.75T22 9q0 2.25-1.425 3.912Q19.15 14.575 17 14.925V21Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutLeft.displayName = 'AmauiIconMaterialRoundaboutLeft';

export default IconMaterialRoundaboutLeft;
