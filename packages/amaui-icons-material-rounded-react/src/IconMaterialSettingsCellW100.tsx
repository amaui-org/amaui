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
      <path d="M8.55 18.7q-.65 0-1.075-.425-.425-.425-.425-1.075V2.8q0-.65.425-1.075Q7.9 1.3 8.55 1.3h6.9q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm7.7-2.35h-8.5v.85q0 .35.225.575Q8.2 18 8.55 18h6.9q.35 0 .575-.225.225-.225.225-.575Zm0-.7V4.35h-8.5v11.3Zm0-12V2.8q0-.35-.225-.575Q15.8 2 15.45 2h-6.9q-.35 0-.575.225-.225.225-.225.575v.85ZM8 23.7q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm-8.25-7.35V18 17.2ZM7.75 2v1.65V2Z"/>
    </Icon>
  );
});

IconMaterialSettingsCellW100.displayName = 'AmauiIconMaterialSettingsCellW100';

export default IconMaterialSettingsCellW100;
