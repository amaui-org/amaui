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
      <path d="M5 18q-.425 0-.713-.288Q4 17.425 4 17t.287-.712Q4.575 16 5 16h5.5L2.7 8.2q-.275-.275-.287-.688Q2.4 7.1 2.7 6.8q.275-.275.7-.275.425 0 .7.275l7.9 7.875 5.2-5.2q-.1-.225-.15-.463Q17 8.775 17 8.5q0-1.05.725-1.775Q18.45 6 19.5 6q1.05 0 1.775.725Q22 7.45 22 8.5q0 1.05-.725 1.775Q20.55 11 19.5 11q-.225 0-.438-.038-.212-.037-.412-.112L13.5 16H19q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 18 19 18Z"/>
    </Icon>
  );
});

IconMaterialNetworkPing.displayName = 'AmauiIconMaterialNetworkPing';

export default IconMaterialNetworkPing;
