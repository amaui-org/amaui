import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldSparkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldSparkFilled'

      short_name='ShieldSpark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q0-84 58-142t142-58q-84 0-142-58t-58-142q0 84-58 142t-142 58q84 0 142 58t58 142Zm0 196q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z"/>
    </Icon>
  );
});

IconMaterialShieldSparkFilled.displayName = 'AmauiIconMaterialShieldSparkFilled';

export default IconMaterialShieldSparkFilled;
