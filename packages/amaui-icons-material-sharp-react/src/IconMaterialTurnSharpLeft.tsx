import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSharpLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpLeft'

      short_name='TurnSharpLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 21v-6H6V6.8L4.4 8.4 3 7l4-4 4 4-1.4 1.4L8 6.8V13h10v8Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpLeft.displayName = 'AmauiIconMaterialTurnSharpLeft';

export default IconMaterialTurnSharpLeft;
