import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedEmailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedEmailW100'

      short_name='StackedEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-292q-26 0-43-17t-17-43v-388q0-26 17-43t43-17h548q26 0 43 17t17 43v388q0 26-17 43t-43 17H260Zm256-230L228-740v388q0 14 9 23t23 9h548q14 0 23-9t9-23v-388L552-522q-8 6-18 6t-18-6Zm18-20 296-224q-3-3-6.5-4.5T814-772H254q-5 0-10 2.5t-8 5.5l298 222ZM152-184q-26 0-43-17t-17-43v-330q0-6 4-10t10-4q6 0 10 4t4 10v330q0 14 9 23t23 9h556q6 0 10 4t4 10q0 6-4 10t-10 4H152Zm688-556q0-6-3.5-14.5T830-766q-3-3-6.5-4.5T814-772H254q-5 0-10 2.5t-8 5.5q-3 3-5.5 11t-2.5 13v-32h612v32Z"/>
    </Icon>
  );
});

IconMaterialStackedEmailW100.displayName = 'AmauiIconMaterialStackedEmailW100';

export default IconMaterialStackedEmailW100;
