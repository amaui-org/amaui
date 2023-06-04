import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNordicWalkingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NordicWalkingW100'

      short_name='NordicWalking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.9 22.35V14.4h.7v7.95Zm-13.325 0L6.3 14.4H7l-1.725 7.95ZM13.5 5.1q-.65 0-1.125-.475T11.9 3.5q0-.65.475-1.125T13.5 1.9q.65 0 1.125.475T15.1 3.5q0 .65-.475 1.125T13.5 5.1ZM7.85 22.35l2.8-14.55-3.3 1.375v3.175h-.7V8.7l4.425-1.825q.675-.275 1.2-.163.525.113.875.638l.975 1.575q.65 1.05 1.75 1.775 1.1.725 2.475.9v.7q-1.525-.125-2.875-1.025-1.35-.9-2.3-2.55L12.2 13.7l2.15 2.075v6.575h-.7v-5.575L10.5 13.75l-1.95 8.6Z"/>
    </Icon>
  );
});

IconMaterialNordicWalkingW100.displayName = 'AmauiIconMaterialNordicWalkingW100';

export default IconMaterialNordicWalkingW100;
