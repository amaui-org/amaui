import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkspacesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacesW100Filled'

      short_name='Workspaces'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-1.225 0-2.112-.887Q3 18.225 3 17q0-1.25.888-2.125Q4.775 14 6 14q1.25 0 2.125.875T9 17q0 1.225-.875 2.113Q7.25 20 6 20Zm6-10q-1.225 0-2.113-.887Q9 8.225 9 7q0-1.25.887-2.125Q10.775 4 12 4q1.25 0 2.125.875T15 7q0 1.225-.875 2.113Q13.25 10 12 10Zm6 10q-1.225 0-2.112-.887Q15 18.225 15 17q0-1.25.888-2.125Q16.775 14 18 14q1.25 0 2.125.875T21 17q0 1.225-.875 2.113Q19.25 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialWorkspacesW100Filled.displayName = 'AmauiIconMaterialWorkspacesW100Filled';

export default IconMaterialWorkspacesW100Filled;
