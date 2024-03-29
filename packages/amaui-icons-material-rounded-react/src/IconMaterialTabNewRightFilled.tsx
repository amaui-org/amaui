import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabNewRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightFilled'

      short_name='TabNewRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M767 896H640q-17 0-28.5-11.5T600 856q0-17 11.5-28.5T640 816h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L788 988q-11 11-27.5 11.5T732 988q-11-11-11-28t11-28l35-36ZM440 616v120q0 17 11.5 28.5T480 776q17 0 28.5-11.5T520 736V616h120q17 0 28.5-11.5T680 576q0-17-11.5-28.5T640 536H520V416q0-17-11.5-28.5T480 376q-17 0-28.5 11.5T440 416v120H320q-17 0-28.5 11.5T280 576q0 17 11.5 28.5T320 616h120ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v334q-19-7-39.5-10.5T759 616q-100 0-169.5 70T520 856q0 21 3.5 41t10.5 39H200Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightFilled.displayName = 'AmauiIconMaterialTabNewRightFilled';

export default IconMaterialTabNewRightFilled;
