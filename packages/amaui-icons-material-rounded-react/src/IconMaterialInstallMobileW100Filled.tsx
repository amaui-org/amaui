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
      <path d="M7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h6.3v3.05H7v13.3h10v-2h.7v3.55q0 .625-.438 1.062-.437.438-1.062.438ZM18 12.775q-.15 0-.275-.05-.125-.05-.25-.175L14.15 9.225q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l3 3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.725l3-3q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-3.325 3.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialInstallMobileW100Filled.displayName = 'AmauiIconMaterialInstallMobileW100Filled';

export default IconMaterialInstallMobileW100Filled;
