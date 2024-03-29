import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIcecreamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IcecreamFilled'

      short_name='Icecream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.05 23-4.7-9q-1.775.075-3.063-1.025Q3 11.875 3 10q0-1.275.738-2.3.737-1.025 1.862-1.45.45-2.275 2.238-3.763Q9.625 1 12 1t4.163 1.487Q17.95 3.975 18.4 6.25q1.125.425 1.863 1.45Q21 8.725 21 10q0 1.875-1.325 2.975T16.7 14Zm0-4.35 2.7-5.25q-.6.3-1.3.45-.7.15-1.45.15-.675 0-1.362-.15-.688-.15-1.338-.45Z"/>
    </Icon>
  );
});

IconMaterialIcecreamFilled.displayName = 'AmauiIconMaterialIcecreamFilled';

export default IconMaterialIcecreamFilled;
