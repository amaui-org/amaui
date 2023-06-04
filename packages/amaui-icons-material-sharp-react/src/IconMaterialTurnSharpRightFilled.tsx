import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSharpRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpRightFilled'

      short_name='TurnSharpRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21v-8h10V6.825L14.4 8.4 13 7l4-4 4 4-1.4 1.425-1.6-1.6V15H8v6Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpRightFilled.displayName = 'AmauiIconMaterialTurnSharpRightFilled';

export default IconMaterialTurnSharpRightFilled;
