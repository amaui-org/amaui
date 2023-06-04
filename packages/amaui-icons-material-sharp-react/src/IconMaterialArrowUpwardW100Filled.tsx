import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUpwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardW100Filled'

      short_name='ArrowUpward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19V6.35L5.5 12.5 5 12l7-7 7 7-.5.5-6.15-6.15V19Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardW100Filled.displayName = 'AmauiIconMaterialArrowUpwardW100Filled';

export default IconMaterialArrowUpwardW100Filled;
