import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestorePageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageW100'

      short_name='RestorePage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h8.15l5.25 5.25V20.7ZM6 20h12V8.85L13.15 4H6Zm6-3.05q1.65 0 2.8-1.15t1.15-2.8q0-1.65-1.15-2.8T12 9.05q-1.1 0-1.875.5-.775.5-1.275 1.1V8.9h-.7v2.95h2.95v-.7H9.35q.375-.575 1.075-.988.7-.412 1.575-.412 1.35 0 2.3.95.95.95.95 2.3 0 1.35-.95 2.3-.95.95-2.3.95-1.1 0-1.925-.637Q9.25 14.975 8.9 14h-.75q.425 1.4 1.475 2.175 1.05.775 2.375.775ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialRestorePageW100.displayName = 'AmauiIconMaterialRestorePageW100';

export default IconMaterialRestorePageW100;
