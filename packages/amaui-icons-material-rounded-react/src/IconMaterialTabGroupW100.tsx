import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabGroupW100'

      short_name='TabGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M326 764q-26 0-43-17t-17-43V288q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm0-28h416q12 0 22-10t10-22V366H564q-13 0-21.5-8.5T534 336v-80H326q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM218 872q-26 0-43-17t-17-43V382q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm76-616v480-480Z"/>
    </Icon>
  );
});

IconMaterialTabGroupW100.displayName = 'AmauiIconMaterialTabGroupW100';

export default IconMaterialTabGroupW100;
