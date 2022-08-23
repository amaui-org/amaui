import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter1SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1SharpFilled'
      short_name='Filter1'

      {...props}
    >
      <path d="M14 15H16V5H12V7H14ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  );
});

IconMaterialFilter1SharpFilled.displayName = 'AmauiIconMaterialFilter1SharpFilled';

export default IconMaterialFilter1SharpFilled;
