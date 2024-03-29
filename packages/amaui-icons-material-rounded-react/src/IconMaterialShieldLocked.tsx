import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldLocked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLocked'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm5 396q-7 0-13-1.5T460-89q-135-45-215.5-166T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 10-.5 20t-1.5 20q-9-2-18.5-3t-19.5-1q-11 0-21 1t-21 3q1-10 1.5-19.5t.5-20.5v-189l-240-90-240 90v189q0 121 68 220t172 132q21-7 41-17t39-23v94q-10 5-20.5 9T511-89q-6 2-12.5 3.5T485-84Zm189 4q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T760-400q33 0 56.5 23.5T840-320v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H674Zm46-200h80v-40q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320v40Z"/>
    </Icon>
  );
});

IconMaterialShieldLocked.displayName = 'AmauiIconMaterialShieldLocked';

export default IconMaterialShieldLocked;
