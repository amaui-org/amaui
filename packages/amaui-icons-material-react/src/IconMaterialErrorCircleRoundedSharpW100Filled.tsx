import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialErrorCircleRoundedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorCircleRoundedSharpW100Filled'
      short_name='ErrorCircleRounded'

      {...props}
    >
      <path d="M12 13.2q.15 0 .25-.1t.1-.25V7.525q0-.125-.1-.225T12 7.2q-.15 0-.25.1t-.1.25v5.325q0 .125.1.225t.25.1Zm0 3.1q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.362-.138-.138-.363-.138-.2 0-.35.138-.15.137-.15.362 0 .2.15.35.15.15.35.15Zm0 4.4q-1.825 0-3.412-.675Q7 19.35 5.825 18.175 4.65 17 3.975 15.412 3.3 13.825 3.3 12t.675-3.413Q4.65 7 5.825 5.825t2.763-1.85Q10.175 3.3 12 3.3t3.413.675q1.587.675 2.762 1.85t1.85 2.762Q20.7 10.175 20.7 12q0 1.825-.675 3.412-.675 1.588-1.85 2.763-1.175 1.175-2.762 1.85-1.588.675-3.413.675Z"/>
    </Icon>
  );
});

IconMaterialErrorCircleRoundedSharpW100Filled.displayName = 'AmauiIconMaterialErrorCircleRoundedSharpW100Filled';

export default IconMaterialErrorCircleRoundedSharpW100Filled;
