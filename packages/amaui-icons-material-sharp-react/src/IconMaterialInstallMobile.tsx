import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstallMobile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobile'

      short_name='InstallMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23V1h9v2H7v1h7v2H7v12h10v-2h2v7Zm2-2h10v-1H7Zm11-7-5-5 1.4-1.4 2.6 2.6V3h2v7.2l2.6-2.6L23 9ZM7 4V3Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialInstallMobile.displayName = 'AmauiIconMaterialInstallMobile';

export default IconMaterialInstallMobile;
