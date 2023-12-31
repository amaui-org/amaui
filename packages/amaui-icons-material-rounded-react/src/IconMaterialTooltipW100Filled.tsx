import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTooltipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TooltipW100Filled'

      short_name='Tooltip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-292H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H558l-53 80q-9 14-25 14t-25-14l-53-80Z"/>
    </Icon>
  );
});

IconMaterialTooltipW100Filled.displayName = 'AmauiIconMaterialTooltipW100Filled';

export default IconMaterialTooltipW100Filled;
