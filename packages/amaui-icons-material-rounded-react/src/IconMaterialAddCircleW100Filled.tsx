import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCircleW100Filled'

      short_name='AddCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q.15 0 .25-.1t.1-.25v-3.65h3.675q.125 0 .225-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.65V7.975q0-.125-.1-.225t-.25-.1q-.15 0-.25.1t-.1.25v3.65H7.975q-.125 0-.225.1t-.1.25q0 .15.1.25t.25.1h3.65v3.675q0 .125.1.225t.25.1Zm0 4.35q-1.825 0-3.412-.675Q7 19.35 5.825 18.175 4.65 17 3.975 15.412 3.3 13.825 3.3 12t.675-3.413Q4.65 7 5.825 5.825t2.763-1.85Q10.175 3.3 12 3.3t3.413.675q1.587.675 2.762 1.85t1.85 2.762Q20.7 10.175 20.7 12q0 1.825-.675 3.412-.675 1.588-1.85 2.763-1.175 1.175-2.762 1.85-1.588.675-3.413.675Z"/>
    </Icon>
  );
});

IconMaterialAddCircleW100Filled.displayName = 'AmauiIconMaterialAddCircleW100Filled';

export default IconMaterialAddCircleW100Filled;
