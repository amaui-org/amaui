import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProductionQuantityLimitsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ProductionQuantityLimitsW100'

      short_name='ProductionQuantityLimits'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 20.85q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm9.2 0q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.962.388q.388.387.388.962t-.388.962q-.387.388-.962.388ZM12 9.5q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Zm-.35-2.85v-5h.7v5Zm-6.575 9.2L7.75 11.1l-3.7-7.75H2.3v-.7h2.2l4.05 8.5h7l3.6-6.5h.8l-4 7.2H8.1l-1.8 3.3h11.65v.7Z"/>
    </Icon>
  );
});

IconMaterialProductionQuantityLimitsW100.displayName = 'AmauiIconMaterialProductionQuantityLimitsW100';

export default IconMaterialProductionQuantityLimitsW100;
