import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPulmonologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulmonologyW100Filled'

      short_name='Pulmonology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 20.35q-.975 0-1.663-.687Q3.3 18.975 3.3 18v-3.775q0-.125.025-.263.025-.137.075-.262l2.275-6.025Q6 6.8 6.7 6.225t1.6-.575q.95 0 1.65.6t.7 1.525V9.45l-2.075 2.1q-.15.15-.15.35 0 .2.15.35.15.15.35.15.2 0 .35-.15l2.375-2.375V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v6.875l2.375 2.375q.15.15.35.15.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35l-2.075-2.1V7.775q0-.925.7-1.525.7-.6 1.65-.6.9 0 1.588.575.687.575 1.012 1.45l2.3 6.025q.05.125.075.262.025.138.025.263V18q0 .975-.7 1.663-.7.687-1.65.687h-3q-.975 0-1.662-.687Q13 18.975 13 18v-2.075l.4-4L12 10.5l-1.45 1.425.45 4V18q0 .975-.7 1.663-.7.687-1.65.687Z"/>
    </Icon>
  );
});

IconMaterialPulmonologyW100Filled.displayName = 'AmauiIconMaterialPulmonologyW100Filled';

export default IconMaterialPulmonologyW100Filled;
