import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSharpRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpRightW100Filled'

      short_name='TurnSharpRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 19.7v-6.55h10v-7.5L14.4 7.9l-.5-.5L17 4.3l3.1 3.1-.5.5-2.25-2.25v8.2h-10v5.85Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpRightW100Filled.displayName = 'AmauiIconMaterialTurnSharpRightW100Filled';

export default IconMaterialTurnSharpRightW100Filled;
