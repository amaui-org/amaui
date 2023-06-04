import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSharpLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpLeftW100Filled'

      short_name='TurnSharpLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.65 19.7v-5.85h-10v-8.2L4.4 7.9l-.5-.5L7 4.3l3.1 3.1-.5.5-2.25-2.25v7.5h10v6.55Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpLeftW100Filled.displayName = 'AmauiIconMaterialTurnSharpLeftW100Filled';

export default IconMaterialTurnSharpLeftW100Filled;
