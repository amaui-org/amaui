import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldSparkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldSparkW100'

      short_name='ShieldSpark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-141q0-72 51-123t123-51q-72 0-123-51t-51-123q0 72-51 123t-123 51q72 0 123 51t51 123Zm0-174Z"/>
    </Icon>
  );
});

IconMaterialShieldSparkW100.displayName = 'AmauiIconMaterialShieldSparkW100';

export default IconMaterialShieldSparkW100;
