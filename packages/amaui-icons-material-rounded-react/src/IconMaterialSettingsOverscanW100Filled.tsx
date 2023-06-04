import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsOverscanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanW100Filled'

      short_name='SettingsOverscan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 13.5v-3L5.3 12Zm5.2 3.2 1.5-1.5h-3Zm-1.5-7.9h3L12 7.3Zm6.7 4.7 1.5-1.5-1.5-1.5ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanW100Filled.displayName = 'AmauiIconMaterialSettingsOverscanW100Filled';

export default IconMaterialSettingsOverscanW100Filled;
