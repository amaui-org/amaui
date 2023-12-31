import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSideNavigationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SideNavigationW100'

      short_name='SideNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm248-28h248q12 0 22-10t10-22v-496q0-12-10-22t-22-10H480v560Z"/>
    </Icon>
  );
});

IconMaterialSideNavigationW100.displayName = 'AmauiIconMaterialSideNavigationW100';

export default IconMaterialSideNavigationW100;
