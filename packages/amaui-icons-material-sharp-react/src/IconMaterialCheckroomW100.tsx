import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckroomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckroomW100'

      short_name='Checkroom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19.35q-.25 0-.325-.237-.075-.238.125-.388l8.85-6.65V10q0-.125.088-.238.087-.112.237-.112.925.025 1.55-.6t.625-1.55q0-.875-.638-1.513Q12.875 5.35 12 5.35t-1.512.637Q9.85 6.625 9.85 7.5h-.7q0-1.2.825-2.025T12 4.65q1.2 0 2.025.812.825.813.825 1.988 0 1.25-.7 2t-1.8.875v1.75l8.85 6.65q.2.15.125.388-.075.237-.325.237Zm1.05-.7h15.9L12 12.675Z"/>
    </Icon>
  );
});

IconMaterialCheckroomW100.displayName = 'AmauiIconMaterialCheckroomW100';

export default IconMaterialCheckroomW100;
