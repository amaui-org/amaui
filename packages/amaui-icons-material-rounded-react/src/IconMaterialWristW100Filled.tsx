import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWristW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WristW100Filled'

      short_name='Wrist'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M264 724H90q-5.95 0-9.975-4.025Q76 715.95 76 710V442q0-5.95 4.025-9.975Q84.05 428 90 428h154l54-54q12.8-12.629 29.365-19.314Q343.929 348 362 348h388q5.95 0 9.975 4.035 4.025 4.035 4.025 10T759.975 372q-4.025 4-9.975 4H576v95h254q5.95 0 9.975 4.035 4.025 4.035 4.025 10T839.975 495q-4.025 4-9.975 4H576v94h294q5.95 0 9.975 4.035 4.025 4.035 4.025 10T879.975 617q-4.025 4-9.975 4H576v95h214q5.95 0 9.975 4.035 4.025 4.035 4.025 10T799.975 740q-4.025 4-9.975 4H453l26 52q13 26 7.5 54T461 898q-5 5-11 5.5t-11-4.5L264 724Z"/>
    </Icon>
  );
});

IconMaterialWristW100Filled.displayName = 'AmauiIconMaterialWristW100Filled';

export default IconMaterialWristW100Filled;
