import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupW100'

      short_name='AdGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-320h416q12 0 22-10t10-22v-368H294v368q0 12 10 22t22 10Zm0 28q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326ZM218-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm76-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialAdGroupW100.displayName = 'AmauiIconMaterialAdGroupW100';

export default IconMaterialAdGroupW100;
