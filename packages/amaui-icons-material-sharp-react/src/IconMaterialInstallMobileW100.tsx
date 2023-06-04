import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstallMobileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallMobileW100'

      short_name='InstallMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 21.7V2.3h7.8V3H7v1.65h7.1v.7H7v13.3h10v-2h.7v5.05ZM7 21h10v-1.65H7Zm11-7.925-4.1-4.1.5-.5 3.25 3.25V3.65h.7v8.075l3.25-3.25.5.5ZM7 4.65V3ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileW100.displayName = 'AmauiIconMaterialInstallMobileW100';

export default IconMaterialInstallMobileW100;
