import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightW100Filled'

      short_name='ArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.925 14.175q-.35.35-.812.162-.463-.187-.463-.687v-3.3q0-.5.463-.688.462-.187.812.163l1.65 1.65q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25Z"/>
    </Icon>
  );
});

IconMaterialArrowRightW100Filled.displayName = 'AmauiIconMaterialArrowRightW100Filled';

export default IconMaterialArrowRightW100Filled;
