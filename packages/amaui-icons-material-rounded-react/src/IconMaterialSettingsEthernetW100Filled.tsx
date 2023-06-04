import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsEthernetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsEthernetW100Filled'

      short_name='SettingsEthernet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.325 16.875q-.1.1-.237.087-.138-.012-.238-.112-.125-.125-.125-.25t.125-.25L20.2 12l-4.375-4.375q-.1-.1-.087-.238.012-.137.112-.237.125-.125.25-.125t.25.125l4.325 4.325q.225.225.225.525 0 .3-.225.525ZM7.65 16.85l-4.325-4.325Q3.1 12.3 3.1 12q0-.3.225-.525l4.35-4.35q.1-.1.238-.088.137.013.237.113.125.125.125.25t-.125.25L3.8 12l4.375 4.375q.1.1.087.238-.012.137-.112.237-.125.125-.25.125t-.25-.125ZM8 12.7q-.275 0-.487-.213Q7.3 12.275 7.3 12t.213-.488Q7.725 11.3 8 11.3t.488.212q.212.213.212.488t-.212.487Q8.275 12.7 8 12.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialSettingsEthernetW100Filled.displayName = 'AmauiIconMaterialSettingsEthernetW100Filled';

export default IconMaterialSettingsEthernetW100Filled;
