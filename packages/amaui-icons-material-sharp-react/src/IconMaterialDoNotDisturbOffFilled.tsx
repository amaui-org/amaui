import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotDisturbOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotDisturbOffFilled'

      short_name='DoNotDisturbOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 17.5 20.35q-1.225.8-2.612 1.225Q13.5 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.5.425-2.888Q2.85 7.725 3.65 6.5L1.375 4.225 2.8 2.8l18.4 18.4ZM8.15 11H7v2h3.15Zm12.2 6.5-4.5-4.5H17v-2h-3.15L6.5 3.65q1.225-.8 2.613-1.225Q10.5 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.5-.425 2.887-.425 1.388-1.225 2.613Z"/>
    </Icon>
  );
});

IconMaterialDoNotDisturbOffFilled.displayName = 'AmauiIconMaterialDoNotDisturbOffFilled';

export default IconMaterialDoNotDisturbOffFilled;
