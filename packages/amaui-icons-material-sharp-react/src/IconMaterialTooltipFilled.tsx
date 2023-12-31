import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTooltipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TooltipFilled'

      short_name='Tooltip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 374-240H80v-640h800v640H586L480-80Z"/>
    </Icon>
  );
});

IconMaterialTooltipFilled.displayName = 'AmauiIconMaterialTooltipFilled';

export default IconMaterialTooltipFilled;
