import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUpwardAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardAltFilled'

      short_name='ArrowUpwardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardAltFilled.displayName = 'AmauiIconMaterialArrowUpwardAltFilled';

export default IconMaterialArrowUpwardAltFilled;
