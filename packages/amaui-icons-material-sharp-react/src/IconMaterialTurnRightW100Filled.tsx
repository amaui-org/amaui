import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnRightW100Filled'

      short_name='TurnRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.625 19.35v-9.7h11.1l-2.25-2.25.5-.5 3.1 3.1L17 13.075l-.5-.5 2.225-2.225h-10.4v9Z"/>
    </Icon>
  );
});

IconMaterialTurnRightW100Filled.displayName = 'AmauiIconMaterialTurnRightW100Filled';

export default IconMaterialTurnRightW100Filled;
