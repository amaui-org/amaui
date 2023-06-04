import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowTopRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopRightW100'

      short_name='ArrowTopRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M710 470H286q-14 0-23 9t-9 23v354q0 6-4 10t-10 4q-6 0-10-4t-4-10V502q0-25 17.5-42.5T286 442h423L550 281q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l172 173q9 9 9 21t-9 21L570 649q-4 4-10 4.5t-10-4.5q-4-4-3.5-10t4.5-10l159-159Z"/>
    </Icon>
  );
});

IconMaterialArrowTopRightW100.displayName = 'AmauiIconMaterialArrowTopRightW100';

export default IconMaterialArrowTopRightW100;
