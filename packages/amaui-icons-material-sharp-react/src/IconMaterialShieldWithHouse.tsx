import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldWithHouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouse'

      short_name='ShieldWithHouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Zm0-17.875-6 2.25V11.1q0 .125.013.275.012.15.012.275L12 7l5.975 4.65q0-.125.013-.275.012-.15.012-.275V6.375ZM10 18.9V15h4v3.9q1.275-.875 2.188-2.163.912-1.287 1.387-2.862L12 9.525l-5.575 4.35q.475 1.575 1.387 2.862Q8.725 18.025 10 18.9Zm2-6.9Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouse.displayName = 'AmauiIconMaterialShieldWithHouse';

export default IconMaterialShieldWithHouse;
