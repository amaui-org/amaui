import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsSuggestW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSuggestW100Filled'

      short_name='SettingsSuggest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.9 8.15-.85-1.8-1.8-.85 1.8-.85.85-1.8.85 1.8 1.8.85-1.8.85Zm2 7.4-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65ZM8.05 20.7l-.25-1.95q-.425-.15-.937-.45-.513-.3-.813-.6l-1.8.8-1.35-2.35L4.5 15q-.125-.575-.125-1 0-.425.125-1l-1.6-1.15L4.25 9.5l1.8.8q.3-.3.813-.6.512-.3.937-.45l.25-1.95h2.7L11 9.25q.425.15.938.45.512.3.812.6l1.8-.8 1.35 2.35L14.3 13q.125.575.125 1 0 .425-.125 1l1.6 1.15-1.35 2.35-1.8-.8q-.3.3-.812.6-.513.3-.938.45l-.25 1.95Zm1.35-4.4q.95 0 1.625-.675T11.7 14q0-.95-.675-1.625T9.4 11.7q-.95 0-1.625.675T7.1 14q0 .95.675 1.625T9.4 16.3Z"/>
    </Icon>
  );
});

IconMaterialSettingsSuggestW100Filled.displayName = 'AmauiIconMaterialSettingsSuggestW100Filled';

export default IconMaterialSettingsSuggestW100Filled;
