import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckW100'

      short_name='SafetyCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Zm0-8.625Zm0 7.875q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.375L12 4.15 6 6.375V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-4.175q1.55 0 2.625-1.075t1.075-2.625q0-1.55-1.075-2.625T12 8.325q-1.55 0-2.625 1.075T8.3 12.025q0 1.55 1.075 2.625T12 15.725Zm1.65-1.55-2-2v-3h.7v2.7l1.8 1.8Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckW100.displayName = 'AmauiIconMaterialSafetyCheckW100';

export default IconMaterialSafetyCheckW100;
