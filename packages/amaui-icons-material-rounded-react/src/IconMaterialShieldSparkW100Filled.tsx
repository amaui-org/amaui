import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldSparkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldSparkW100Filled'

      short_name='ShieldSpark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-305q0-72 51-123t123-51q-72 0-123-51t-51-123q0 72-51 123t-123 51q72 0 123 51t51 123Zm0 166q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Z"/>
    </Icon>
  );
});

IconMaterialShieldSparkW100Filled.displayName = 'AmauiIconMaterialShieldSparkW100Filled';

export default IconMaterialShieldSparkW100Filled;
