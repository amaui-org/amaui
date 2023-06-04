import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkspacesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacesW100'

      short_name='Workspaces'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-1.225 0-2.112-.887Q3 18.225 3 17q0-1.25.888-2.125Q4.775 14 6 14q1.25 0 2.125.875T9 17q0 1.225-.875 2.113Q7.25 20 6 20Zm6-10q-1.225 0-2.113-.887Q9 8.225 9 7q0-1.25.887-2.125Q10.775 4 12 4q1.25 0 2.125.875T15 7q0 1.225-.875 2.113Q13.25 10 12 10Zm6 10q-1.225 0-2.112-.887Q15 18.225 15 17q0-1.25.888-2.125Q16.775 14 18 14q1.25 0 2.125.875T21 17q0 1.225-.875 2.113Q19.25 20 18 20ZM12 9.3q.95 0 1.625-.675T14.3 7q0-.95-.675-1.625T12 4.7q-.95 0-1.625.675T9.7 7q0 .95.675 1.625T12 9.3Zm-6 10q.95 0 1.625-.675T8.3 17q0-.95-.675-1.625T6 14.7q-.95 0-1.625.675T3.7 17q0 .95.675 1.625T6 19.3Zm12 0q.95 0 1.625-.675T20.3 17q0-.95-.675-1.625T18 14.7q-.95 0-1.625.675T15.7 17q0 .95.675 1.625T18 19.3ZM12 7ZM6 17Zm12 0Z"/>
    </Icon>
  );
});

IconMaterialWorkspacesW100.displayName = 'AmauiIconMaterialWorkspacesW100';

export default IconMaterialWorkspacesW100;
