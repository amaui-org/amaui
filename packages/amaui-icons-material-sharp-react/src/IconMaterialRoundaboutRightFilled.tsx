import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoundaboutRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutRightFilled'

      short_name='RoundaboutRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21v-6.075q-2.15-.35-3.575-2.013Q2 11.25 2 9q0-2.5 1.75-4.25T8 3q2.25 0 3.913 1.425Q13.575 5.85 13.925 8H18.2l-1.6-1.6L18 5l4 4-4 4-1.4-1.4 1.6-1.6H12V9q0-1.65-1.175-2.825Q9.65 5 8 5 6.35 5 5.175 6.175 4 7.35 4 9q0 1.65 1.162 2.825Q6.325 13 8 13h1v8Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutRightFilled.displayName = 'AmauiIconMaterialRoundaboutRightFilled';

export default IconMaterialRoundaboutRightFilled;
