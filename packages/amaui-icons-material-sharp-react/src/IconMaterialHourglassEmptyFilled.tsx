import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassEmptyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassEmptyFilled'

      short_name='HourglassEmpty'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20h8v-3q0-1.65-1.175-2.825Q13.65 13 12 13q-1.65 0-2.825 1.175Q8 15.35 8 17Zm4-9q1.65 0 2.825-1.175Q16 8.65 16 7V4H8v3q0 1.65 1.175 2.825Q10.35 11 12 11ZM4 22v-2h2v-3q0-1.525.713-2.863Q7.425 12.8 8.7 12q-1.275-.8-1.987-2.138Q6 8.525 6 7V4H4V2h16v2h-2v3q0 1.525-.712 2.862Q16.575 11.2 15.3 12q1.275.8 1.988 2.137Q18 15.475 18 17v3h2v2Z"/>
    </Icon>
  );
});

IconMaterialHourglassEmptyFilled.displayName = 'AmauiIconMaterialHourglassEmptyFilled';

export default IconMaterialHourglassEmptyFilled;
