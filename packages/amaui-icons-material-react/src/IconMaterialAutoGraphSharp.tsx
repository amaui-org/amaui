import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoGraphSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoGraphSharp'
      short_name='AutoGraph'

      {...props}
    >
      <path d="M4.5 20.5 3 19 10.5 11.5 14.5 15.5 21.6 7.525 23 8.925 14.5 18.5 10.5 14.5ZM4 14 3.05 11.95 1 11 3.05 10.05 4 8 4.95 10.05 7 11 4.95 11.95ZM15 12 14.05 9.95 12 9 14.05 8.05 15 6 15.95 8.05 18 9 15.95 9.95ZM8.5 9 7.4 6.6 5 5.5 7.4 4.4 8.5 2 9.6 4.4 12 5.5 9.6 6.6Z"/>
    </Icon>
  );
});

IconMaterialAutoGraphSharp.displayName = 'AmauiIconMaterialAutoGraphSharp';

export default IconMaterialAutoGraphSharp;
