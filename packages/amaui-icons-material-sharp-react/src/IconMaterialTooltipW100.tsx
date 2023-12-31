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
      <path d="m480-174-78-118H132v-536h696v536H558l-78 118ZM160-320h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTooltipW100.displayName = 'AmauiIconMaterialTooltipW100';

export default IconMaterialTooltipW100;
