import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsEthernetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsEthernetW100'

      short_name='SettingsEthernet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.1 17.1-.5-.5 4.6-4.6-4.6-4.6.5-.5 5.1 5.1Zm-8.2 0L2.8 12l5.1-5.1.5.5L3.8 12l4.6 4.6Zm.1-4.4q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm4 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm4 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialSettingsEthernetW100.displayName = 'AmauiIconMaterialSettingsEthernetW100';

export default IconMaterialSettingsEthernetW100;
