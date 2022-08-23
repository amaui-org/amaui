import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveSharpFilled'
      short_name='Remove'

      {...props}
    >
      <path d="M5 13V11H19V13Z"/>
    </Icon>
  );
});

IconMaterialRemoveSharpFilled.displayName = 'AmauiIconMaterialRemoveSharpFilled';

export default IconMaterialRemoveSharpFilled;
