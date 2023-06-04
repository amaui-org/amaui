import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsOverscanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanW100'

      short_name='SettingsOverscan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 8.8h3L12 7.3Zm6.7 4.7 1.5-1.5-1.5-1.5Zm-10.4 0v-3L5.3 12Zm5.2 3.2 1.5-1.5h-3Zm-8.7 2V5.3h17.4v13.4ZM4 18V6Zm0 0h16V6H4Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanW100.displayName = 'AmauiIconMaterialSettingsOverscanW100';

export default IconMaterialSettingsOverscanW100;
