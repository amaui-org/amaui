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
      <path d="M374-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H586l-73 110q-12 18-33 18t-33-18l-73-110Z"/>
    </Icon>
  );
});

IconMaterialTooltipFilled.displayName = 'AmauiIconMaterialTooltipFilled';

export default IconMaterialTooltipFilled;
