import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstallMobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileW100Filled'

      short_name='InstallMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 21.7V2.3h7.8v3.05H7v13.3h10v-2h.7v5.05ZM18 13.075l-4.1-4.1.5-.5 3.25 3.25V3.65h.7v8.075l3.25-3.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileW100Filled.displayName = 'AmauiIconMaterialInstallMobileW100Filled';

export default IconMaterialInstallMobileW100Filled;
