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
      <path d="m480-174-78-118H132v-536h696v536H558l-78 118Z"/>
    </Icon>
  );
});

IconMaterialTooltipW100Filled.displayName = 'AmauiIconMaterialTooltipW100Filled';

export default IconMaterialTooltipW100Filled;
