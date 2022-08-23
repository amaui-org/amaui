import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMadeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeSharpFilled'
      short_name='CallMade'

      {...props}
    >
      <path d="M5.4 20 4 18.6 15.6 7H9V5H19V15H17V8.4Z"/>
    </Icon>
  );
});

IconMaterialCallMadeSharpFilled.displayName = 'AmauiIconMaterialCallMadeSharpFilled';

export default IconMaterialCallMadeSharpFilled;
