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
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-171q0-72 51-123t123-51q-72 0-123-51t-51-123q0 72-51 123t-123 51q72 0 123 51t51 123Z"/>
    </Icon>
  );
});

IconMaterialShieldSparkW100Filled.displayName = 'AmauiIconMaterialShieldSparkW100Filled';

export default IconMaterialShieldSparkW100Filled;
