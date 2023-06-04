import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckW100Filled'

      short_name='SafetyCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.725q1.55 0 2.625-1.075t1.075-2.625q0-1.55-1.075-2.625T12 8.325q-1.55 0-2.625 1.075T8.3 12.025q0 1.55 1.075 2.625T12 15.725Zm.35-3.85 1.55 1.55q.125.125.125.25t-.125.25q-.125.125-.263.112-.137-.012-.237-.112L11.775 12.3q-.025-.025-.125-.3V9.525q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25Zm-.35 8.7h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckW100Filled.displayName = 'AmauiIconMaterialSafetyCheckW100Filled';

export default IconMaterialSafetyCheckW100Filled;
