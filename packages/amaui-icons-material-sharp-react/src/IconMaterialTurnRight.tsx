import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnRight'

      short_name='TurnRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20V9h10.2l-1.6-1.6L17 6l4 4-4 4-1.4-1.4 1.6-1.6H9v9Z"/>
    </Icon>
  );
});

IconMaterialTurnRight.displayName = 'AmauiIconMaterialTurnRight';

export default IconMaterialTurnRight;
