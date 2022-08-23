import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEMobiledataSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataSharpFilled'
      short_name='EMobiledata'

      {...props}
    >
      <path d="M8 17V7H16V9H10V11H16V13H10V15H16V17Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataSharpFilled.displayName = 'AmauiIconMaterialEMobiledataSharpFilled';

export default IconMaterialEMobiledataSharpFilled;
