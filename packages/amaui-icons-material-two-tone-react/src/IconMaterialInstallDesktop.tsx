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
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="14.83,9 14.83,9 16,10.17"/><polygon opacity=".3" points="4,17 20,17 20,13.83 17,16.83 9.17,9 13,5.17 13,5 4,5"/><path d="M20,17H4V5h9V3H4C2.89,3,2,3.89,2,5v12c0,1.1,0.89,2,2,2h4v2h8v-2h4c1.1,0,2-0.9,2-2v-5.17l-2,2V17z"/><polygon points="18,10.17 18,3 16,3 16,10.17 13.41,7.59 12,9 17,14 22,9 20.59,7.59"/></g></g>
    </Icon>
  );
});

IconMaterialInstallDesktop.displayName = 'AmauiIconMaterialInstallDesktop';

export default IconMaterialInstallDesktop;
