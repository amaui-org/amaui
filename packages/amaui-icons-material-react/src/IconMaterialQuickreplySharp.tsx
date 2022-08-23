import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuickreplySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplySharp'
      short_name='Quickreply'

      {...props}
    >
      <path d="M2 22V2H22V10H20V4H4V16H15V18H6ZM4 16V4ZM19 23V18H17V12H22L20.3 16H22.5Z"/>
    </Icon>
  );
});

IconMaterialQuickreplySharp.displayName = 'AmauiIconMaterialQuickreplySharp';

export default IconMaterialQuickreplySharp;
