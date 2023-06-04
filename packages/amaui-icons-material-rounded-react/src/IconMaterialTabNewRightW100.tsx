import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabNewRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightW100'

      short_name='TabNewRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856V296v560Zm32 28q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v306q-7-1-14-1.5t-14-.5V328q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h304q0 7 .5 14t1.5 14H232Zm597-14H640q-6 0-10-4t-4-10q0-6 4-10t10-4h189l-79-81q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l92 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 3.5T750 969q-4-4-4-9t4-9l79-81ZM466 590v146q0 6 4 10t10 4q6 0 10-4t4-10V590h146q6 0 10-4t4-10q0-6-4-10t-10-4H494V416q0-6-4-10t-10-4q-6 0-10 4t-4 10v146H320q-6 0-10 4t-4 10q0 6 4 10t10 4h146Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightW100.displayName = 'AmauiIconMaterialTabNewRightW100';

export default IconMaterialTabNewRightW100;
