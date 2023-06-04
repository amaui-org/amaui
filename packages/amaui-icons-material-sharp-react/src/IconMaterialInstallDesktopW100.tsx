import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstallDesktopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallDesktopW100'

      short_name='InstallDesktop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.1 19.7v-2h-6V4.3h8.8V5H3.8v12h16v-2.35h.7v3.05h-6v2Zm7.7-6.675-4.1-4.1.475-.475 3.275 3.275V4.3h.7v7.425l3.275-3.275.475.475Z"/>
    </Icon>
  );
});

IconMaterialInstallDesktopW100.displayName = 'AmauiIconMaterialInstallDesktopW100';

export default IconMaterialInstallDesktopW100;
