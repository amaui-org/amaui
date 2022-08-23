import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEMobiledataSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataSharp'
      short_name='EMobiledata'

      {...props}
    >
      <path d="M8 17V7H16V9H10V11H16V13H10V15H16V17Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataSharp.displayName = 'AmauiIconMaterialEMobiledataSharp';

export default IconMaterialEMobiledataSharp;
