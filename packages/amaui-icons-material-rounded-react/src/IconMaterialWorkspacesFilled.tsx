import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkspacesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacesFilled'

      short_name='Workspaces'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-1.65 0-2.825-1.175Q2 18.65 2 17q0-1.65 1.175-2.825Q4.35 13 6 13q1.65 0 2.825 1.175Q10 15.35 10 17q0 1.65-1.175 2.825Q7.65 21 6 21Zm6-10q-1.65 0-2.825-1.175Q8 8.65 8 7q0-1.65 1.175-2.825Q10.35 3 12 3q1.65 0 2.825 1.175Q16 5.35 16 7q0 1.65-1.175 2.825Q13.65 11 12 11Zm6 10q-1.65 0-2.825-1.175Q14 18.65 14 17q0-1.65 1.175-2.825Q16.35 13 18 13q1.65 0 2.825 1.175Q22 15.35 22 17q0 1.65-1.175 2.825Q19.65 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialWorkspacesFilled.displayName = 'AmauiIconMaterialWorkspacesFilled';

export default IconMaterialWorkspacesFilled;
