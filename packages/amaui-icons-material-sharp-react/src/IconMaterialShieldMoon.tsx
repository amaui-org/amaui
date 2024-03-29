import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldMoon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldMoon'

      short_name='ShieldMoon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Zm0-10Zm0 7.9q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375l-6-2.25-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3Zm.525-3.9q.95 0 1.863-.4.912-.4 1.587-1.2.175-.2.075-.45-.1-.25-.35-.3-.95-.15-1.8-.712-.85-.563-1.375-1.488-.525-.9-.6-1.913-.075-1.012.275-1.937.1-.25-.062-.45-.163-.2-.438-.15-1.725.325-2.725 1.625t-1 2.875q0 1.875 1.337 3.188Q10.65 16 12.525 16Z"/>
    </Icon>
  );
});

IconMaterialShieldMoon.displayName = 'AmauiIconMaterialShieldMoon';

export default IconMaterialShieldMoon;
