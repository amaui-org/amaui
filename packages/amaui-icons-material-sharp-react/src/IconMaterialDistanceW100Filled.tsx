import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDistanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DistanceW100Filled'

      short_name='Distance'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 950q-94 0-154-26t-60-68q0-20 17.5-37.5T332 787l8 27q-22 10-33 20.5T294 856q5 30 57.5 48T480 922q75 0 128-18t58-48q-2-11-13-21t-33-21l9-27q31 14 48 31.5t17 37.5q0 42-60 68t-154 26Zm0-152q-8 0-15-6.5T454 776q-27-61-59-102.5T334 594q-28-38-47-79t-19-101q0-89 61.5-150.5T480 202q89 0 150.5 61.5T692 414q0 60-18.5 101T626 594q-28 38-60.5 79.5T506 776q-4 9-11 15.5t-15 6.5Zm0-330q23 0 38.5-15.5T534 414q0-23-15.5-38.5T480 360q-23 0-38.5 15.5T426 414q0 23 15.5 38.5T480 468Z"/>
    </Icon>
  );
});

IconMaterialDistanceW100Filled.displayName = 'AmauiIconMaterialDistanceW100Filled';

export default IconMaterialDistanceW100Filled;
