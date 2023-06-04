import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProductionQuantityLimitsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProductionQuantityLimitsW100Filled'

      short_name='ProductionQuantityLimits'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 20.85q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm9.2 0q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.962.388q.388.387.388.962t-.388.962q-.387.388-.962.388ZM12 9.5q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Zm-.35-2.85v-5h.7v5Zm-4.25 9.2q-.8 0-1.187-.662-.388-.663-.013-1.338l1.55-2.75-3.7-7.75h-1.4q-.15 0-.25-.1T2.3 3q0-.15.1-.25t.25-.1h1.375q.225 0 .4.112.175.113.275.313l3.85 8.075h7l3.5-6.325q.05-.075.125-.125t.175-.05q.2 0 .3.162.1.163 0 .363l-3.3 5.975q-.2.35-.512.525-.313.175-.688.175H8.1l-1.25 2.3q-.175.325 0 .662.175.338.55.338h10.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialProductionQuantityLimitsW100Filled.displayName = 'AmauiIconMaterialProductionQuantityLimitsW100Filled';

export default IconMaterialProductionQuantityLimitsW100Filled;
