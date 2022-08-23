import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLastPageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageSharp'
      short_name='LastPage'

      {...props}
    >
      <path d="M7 18 5.6 16.6 10.2 12 5.6 7.4 7 6 13 12ZM16 18V6H18V18Z"/>
    </Icon>
  );
});

IconMaterialLastPageSharp.displayName = 'AmauiIconMaterialLastPageSharp';

export default IconMaterialLastPageSharp;
