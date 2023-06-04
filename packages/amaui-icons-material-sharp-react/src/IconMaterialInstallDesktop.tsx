import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstallDesktop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallDesktop'

      short_name='InstallDesktop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21v-2H2V3h10v2H4v12h16v-3h2v5h-6v2Zm9-7-5-5 1.4-1.4 2.6 2.575V3h2v7.175L20.6 7.6 22 9Z"/>
    </Icon>
  );
});

IconMaterialInstallDesktop.displayName = 'AmauiIconMaterialInstallDesktop';

export default IconMaterialInstallDesktop;
