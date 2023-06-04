import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkPing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkPing'

      short_name='NetworkPing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18v-2h6.5L2 7.5l1.4-1.4 8.6 8.575 5.2-5.2q-.1-.225-.15-.463Q17 8.775 17 8.5q0-1.05.725-1.775Q18.45 6 19.5 6q1.05 0 1.775.725Q22 7.45 22 8.5q0 1.05-.725 1.775Q20.55 11 19.5 11q-.225 0-.438-.038-.212-.037-.412-.112L13.5 16H20v2Z"/>
    </Icon>
  );
});

IconMaterialNetworkPing.displayName = 'AmauiIconMaterialNetworkPing';

export default IconMaterialNetworkPing;
