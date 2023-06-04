import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBack'

      short_name='DoorBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M7,19h10V5H7V19z M9,11h2v2H9V11z" opacity=".3"/><path d="M19,19V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v14H3v2h18v-2H19z M17,19H7V5h10V19z"/><rect height="2" width="2" x="9" y="11"/></g></g>
    </Icon>
  );
});

IconMaterialDoorBack.displayName = 'AmauiIconMaterialDoorBack';

export default IconMaterialDoorBack;
