import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpW100Filled'

      short_name='ArrowDropUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.375 13.35q-.5 0-.687-.463-.188-.462.162-.812l1.65-1.65q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l1.65 1.65q.35.35.163.812-.188.463-.688.463Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpW100Filled.displayName = 'AmauiIconMaterialArrowDropUpW100Filled';

export default IconMaterialArrowDropUpW100Filled;
