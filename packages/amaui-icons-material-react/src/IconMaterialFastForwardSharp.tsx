import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastForwardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastForwardSharp'
      short_name='FastForward'

      {...props}
    >
      <path d="M2.5 18V6L11.5 12ZM12.5 18V6L21.5 12ZM4.5 12ZM14.5 12ZM4.5 14.25 7.9 12 4.5 9.75ZM14.5 14.25 17.9 12 14.5 9.75Z"/>
    </Icon>
  );
});

IconMaterialFastForwardSharp.displayName = 'AmauiIconMaterialFastForwardSharp';

export default IconMaterialFastForwardSharp;
