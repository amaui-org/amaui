import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConnectedTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTvW100Filled'

      short_name='ConnectedTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 15.6h1.2q-.125-.45-.437-.762-.313-.313-.763-.438Zm3.55 0h.7q0-1.775-1.237-3.013Q7.175 11.35 5.4 11.35v.7q1.475 0 2.513 1.037Q8.95 14.125 8.95 15.6Zm3.05 0h.7q0-1.5-.575-2.838-.575-1.337-1.563-2.324-.987-.988-2.324-1.563Q6.9 8.3 5.4 8.3V9q2.75 0 4.675 1.925Q12 12.85 12 15.6Zm-2.7 4.1v-2h-6V4.3h17.4v13.4h-6v2Z"/>
    </Icon>
  );
});

IconMaterialConnectedTvW100Filled.displayName = 'AmauiIconMaterialConnectedTvW100Filled';

export default IconMaterialConnectedTvW100Filled;
