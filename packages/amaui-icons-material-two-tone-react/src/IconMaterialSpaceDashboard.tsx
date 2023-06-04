import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceDashboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboard'

      short_name='SpaceDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M5,19V5h6v14H5z M19,19h-6v-7h6V19z M19,10h-6V5h6V10z" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M5,19V5h6v14H5z M19,19h-6v-7h6V19z M19,10h-6V5h6V10z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboard.displayName = 'AmauiIconMaterialSpaceDashboard';

export default IconMaterialSpaceDashboard;
