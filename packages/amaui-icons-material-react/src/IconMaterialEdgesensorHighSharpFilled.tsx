import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEdgesensorHighSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorHighSharpFilled'
      short_name='EdgesensorHigh'

      {...props}
    >
      <path d="M3 14V7H5V14ZM0 17V10H2V17ZM22 14V7H24V14ZM19 17V10H21V17ZM6 22V2H18V22ZM8 17H16V7H8Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorHighSharpFilled.displayName = 'AmauiIconMaterialEdgesensorHighSharpFilled';

export default IconMaterialEdgesensorHighSharpFilled;
