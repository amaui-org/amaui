import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopSharpFilled'
      short_name='Stop'

      {...props}
    >
      <path d="M6 18V6H18V18Z"/>
    </Icon>
  );
});

IconMaterialStopSharpFilled.displayName = 'AmauiIconMaterialStopSharpFilled';

export default IconMaterialStopSharpFilled;
