import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockedFilled'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-84q-7 0-13-1t-12-3q-137-45-216-164t-79-264v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 10-.5 20t-1.5 20q-10-2-19-3t-19-1q-83 0-141.5 58.5T560-280v170q-13 7-27 12l-28 10q-6 2-12 3t-13 1Zm194 4q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T760-400q33 0 56.5 23.5T840-320v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H674Zm46-200h80v-40q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320v40Z"/>
    </Icon>
  );
});

IconMaterialShieldLockedFilled.displayName = 'AmauiIconMaterialShieldLockedFilled';

export default IconMaterialShieldLockedFilled;
