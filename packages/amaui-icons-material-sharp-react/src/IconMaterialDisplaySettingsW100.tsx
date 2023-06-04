import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisplaySettingsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplaySettingsW100'

      short_name='DisplaySettings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.15 10.75h.7v-1h1.5v-.7h-1.5v-1h-.7Zm-8.5-1h7.5v-.7h-7.5Zm1.5 4.2h.7v-2.7h-.7v1h-1.5v.7h1.5Zm1.7-1h7.5v-.7h-7.5ZM9.3 19.7v-2h-6V4.3h17.4v13.4h-6v2ZM4 17h16V5H4ZM4 5v12Z"/>
    </Icon>
  );
});

IconMaterialDisplaySettingsW100.displayName = 'AmauiIconMaterialDisplaySettingsW100';

export default IconMaterialDisplaySettingsW100;
