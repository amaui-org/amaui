import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressSharpFilled'
      short_name='NestWakeOnPress'

      {...props}
    >
      <path d="M19 13.125v-9h3v9Zm-11.85 8L2.025 15.75l1.2-1.25 3.8.875V4.625q0-.625.438-1.063.437-.437 1.062-.437t1.063.437q.437.438.437 1.063v6h1.4l5.775 2.9-1.075 7.6Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPressSharpFilled.displayName = 'AmauiIconMaterialNestWakeOnPressSharpFilled';

export default IconMaterialNestWakeOnPressSharpFilled;
