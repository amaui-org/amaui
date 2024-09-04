import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerSettingsCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsCircle'

      short_name='PowerSettingsCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-80q100 0 170-70t70-170q0-51-19-94.5T650-650l-57 57q22 22 34.5 51t12.5 62q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-33 12.5-62t34.5-51l-57-57q-32 32-51 75.5T240-480q0 100 70 170t170 70Zm-40-240h80v-240h-80v240Zm40 0Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsCircle.displayName = 'AmauiIconMaterialPowerSettingsCircle';

export default IconMaterialPowerSettingsCircle;
