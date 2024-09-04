import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPlayW100'

      short_name='MotionPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m443-376 138-92q7-5 7-12t-7-12l-138-92q-8-5-15.5-.89t-7.5 13.08v183.84q0 8.97 7.5 12.97t15.5-1Zm37.17 244q-72.17 0-135.73-27.23-63.56-27.22-110.57-73.9-47.02-46.67-74.44-109.77Q132-406 132-478q0-30 5-59t14-58q2-6 7.5-9t10.81-1q5.69 2 7.69 8.5t0 12.5q-7.85 25.61-12.42 51.81Q160-506 160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93q-25.53 0-50.53 4T380-784q-6 2-12-.5t-9-7.5q-3-5-.5-10t7.5-7q26-9 53-14t55.2-5q73.14 0 137.47 27T724-726.5q48 47.5 76 110.91 28 63.4 28 135.5 0 72.09-27.39 135.65t-74.35 110.57q-46.96 47.02-110.43 74.44Q552.35-132 480.17-132ZM242-690q-11 0-19.5-8.5T214-718q0-11 8.5-19.5T242-746q11 0 19.5 8.5T270-718q0 11-8.5 19.5T242-690Zm238 210Z"/>
    </Icon>
  );
});

IconMaterialMotionPlayW100.displayName = 'AmauiIconMaterialMotionPlayW100';

export default IconMaterialMotionPlayW100;
