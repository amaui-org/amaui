import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFollowTheSignsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FollowTheSignsW100Filled'

      short_name='FollowTheSigns'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 5.1q-.65 0-1.125-.475T7.9 3.5q0-.65.475-1.125T9.5 1.9q.65 0 1.125.475T11.1 3.5q0 .65-.475 1.125T9.5 5.1ZM3.85 22.35 6.65 7.8l-3.3 1.375v3.175h-.7V8.7l4.425-1.825q.675-.275 1.213-.163.537.113.862.638l.975 1.575q.65 1.05 1.762 1.787 1.113.738 2.463.888v.7q-1.8-.15-3.112-1.188-1.313-1.037-2.063-2.387L8.2 13.7l2.15 2.1v6.55h-.7v-5.575L6.5 13.75l-1.95 8.6Zm13.3.25v-14H13.4V2.4h8.2v6.2h-3.75v14Zm.875-15.2 1.9-1.9-1.9-1.9-.5.5 1.05 1.05H14.9v.7h3.675l-1.05 1.05Z"/>
    </Icon>
  );
});

IconMaterialFollowTheSignsW100Filled.displayName = 'AmauiIconMaterialFollowTheSignsW100Filled';

export default IconMaterialFollowTheSignsW100Filled;
