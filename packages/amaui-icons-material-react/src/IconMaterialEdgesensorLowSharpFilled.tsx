import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowSharpFilled'
      short_name='EdgesensorLow'

      {...props}
    >
      <path d="M6 22V2H18V22ZM8 17H16V7H8ZM2 14V7H4V14ZM20 17V10H22V17Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowSharpFilled.displayName = 'AmauiIconMaterialEdgesensorLowSharpFilled';

export default IconMaterialEdgesensorLowSharpFilled;
