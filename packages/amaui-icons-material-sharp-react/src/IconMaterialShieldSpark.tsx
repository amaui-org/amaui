import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldSpark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldSpark'

      short_name='ShieldSpark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-116q0-84 58-142t142-58q-84 0-142-58t-58-142q0 84-58 142t-142 58q84 0 142 58t58 142Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialShieldSpark.displayName = 'AmauiIconMaterialShieldSpark';

export default IconMaterialShieldSpark;
