import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTooltipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TooltipW100'

      short_name='Tooltip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M402-292H192q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H558l-53 80q-9 14-25 14t-25-14l-53-80Zm-210-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTooltipW100.displayName = 'AmauiIconMaterialTooltipW100';

export default IconMaterialTooltipW100;
