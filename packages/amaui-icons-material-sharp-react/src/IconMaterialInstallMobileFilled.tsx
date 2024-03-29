import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstallMobileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileFilled'

      short_name='InstallMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23V1h9v5H7v12h10v-2h2v7Zm13-9-5-5 1.4-1.4 2.6 2.6V3h2v7.2l2.6-2.6L23 9Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileFilled.displayName = 'AmauiIconMaterialInstallMobileFilled';

export default IconMaterialInstallMobileFilled;
