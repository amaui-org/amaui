import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRampRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RampRight'

      short_name='RampRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.425 0-.712-.288Q11 20.425 11 20v-5.3q-.725 1-1.7 1.9-.975.9-2.175 1.7-.275.2-.637.15-.363-.05-.613-.3-.35-.35-.313-.8.038-.45.463-.725Q7.6 15.575 9.3 13.65T11 9V6.8l-.9.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l2.575-2.6q.15-.15.338-.213.187-.062.387-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-.9-.9V20q0 .425-.287.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialRampRight.displayName = 'AmauiIconMaterialRampRight';

export default IconMaterialRampRight;
