import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectSharpFilled'
      short_name='Eject'

      {...props}
    >
      <path d="M5.35 15 12 5 18.65 15ZM5 19V17H19V19Z"/>
    </Icon>
  );
});

IconMaterialEjectSharpFilled.displayName = 'AmauiIconMaterialEjectSharpFilled';

export default IconMaterialEjectSharpFilled;
