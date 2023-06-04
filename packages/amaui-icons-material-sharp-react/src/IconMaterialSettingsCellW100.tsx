import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsCellW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsCellW100'

      short_name='SettingsCell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 18.7V1.3h9.9v17.4Zm.7-.7h8.5v-1.65h-8.5Zm0-2.35h8.5V4.35h-8.5Zm0-12h8.5V2h-8.5ZM8 23.7q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213ZM7.75 3.65V2v1.65Zm0 14.35v-1.65V18Z"/>
    </Icon>
  );
});

IconMaterialSettingsCellW100.displayName = 'AmauiIconMaterialSettingsCellW100';

export default IconMaterialSettingsCellW100;
