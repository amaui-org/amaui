import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOrdersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrdersW100'

      short_name='Orders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-272v-352l-62-137q-2-5 0-11t7-8q5-2 11 0t8 7l66 147h476l66-147q2-5 8-7t11 0q5 2 7 8t0 11l-62 137v352q0 25-17.5 42.5T688-212H272q-25 0-42.5-17.5T212-272Zm188-194h160q6 0 10-4t4-10q0-6-4-10t-10-4H400q-6 0-10 4t-4 10q0 6 4 10t10 4ZM272-240h416q14 0 23-9t9-23v-326H240v326q0 14 9 23t23 9Zm-32 0v-358 358Z"/>
    </Icon>
  );
});

IconMaterialOrdersW100.displayName = 'AmauiIconMaterialOrdersW100';

export default IconMaterialOrdersW100;
