import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleW100Filled'

      short_name='AccountCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 17.6q1.275-.9 2.663-1.425Q10.35 15.65 12 15.65t3.038.525q1.387.525 2.662 1.425 1.025-1.025 1.663-2.45Q20 13.725 20 12q0-3.325-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12q0 1.725.638 3.15.637 1.425 1.662 2.45Zm5.7-5.25q-1.2 0-2.025-.825T9.15 9.5q0-1.2.825-2.025T12 6.65q1.2 0 2.025.825T14.85 9.5q0 1.2-.825 2.025T12 12.35Zm0 8.35q-1.825 0-3.412-.675Q7 19.35 5.825 18.175 4.65 17 3.975 15.412 3.3 13.825 3.3 12t.675-3.413Q4.65 7 5.825 5.825t2.763-1.85Q10.175 3.3 12 3.3t3.413.675q1.587.675 2.762 1.85t1.85 2.762Q20.7 10.175 20.7 12q0 1.825-.675 3.412-.675 1.588-1.85 2.763-1.175 1.175-2.762 1.85-1.588.675-3.413.675Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleW100Filled.displayName = 'AmauiIconMaterialAccountCircleW100Filled';

export default IconMaterialAccountCircleW100Filled;
