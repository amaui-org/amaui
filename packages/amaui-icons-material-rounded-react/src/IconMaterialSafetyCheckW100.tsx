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
      <path d="M12 15.725q1.55 0 2.625-1.075t1.075-2.625q0-1.55-1.075-2.625T12 8.325q-1.55 0-2.625 1.075T8.3 12.025q0 1.55 1.075 2.625T12 15.725Zm.35-3.85 1.55 1.55q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L11.775 12.3q-.025-.025-.125-.3V9.525q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25Zm-.35 8.7h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Zm0-.675q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.775q0-.2-.1-.35-.1-.15-.275-.2L12.375 4.3q-.2-.075-.375-.075t-.375.075l-5.25 1.925q-.175.05-.275.2-.1.15-.1.35V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.85Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckW100.displayName = 'AmauiIconMaterialSafetyCheckW100';

export default IconMaterialSafetyCheckW100;
