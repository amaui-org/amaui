import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTooltip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tooltip'

      short_name='Tooltip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 374-240H80v-640h800v640H586L480-80ZM160-320h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialTooltip.displayName = 'AmauiIconMaterialTooltip';

export default IconMaterialTooltip;
