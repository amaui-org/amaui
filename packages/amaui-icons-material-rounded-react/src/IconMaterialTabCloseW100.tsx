import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabCloseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseW100'

      short_name='TabClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M326 764q-26 0-43-17t-17-43V288q0-26 17-43t43-17h416q26 0 43 17t17 43v416q0 26-17 43t-43 17H326Zm0-28h416q12 0 22-10t10-22V288q0-12-10-22t-22-10H326q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM218 872q-26 0-43-17t-17-43V382q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h430q6 0 10 4t4 10q0 6-4 10t-10 4H218Zm76-616v480-480Zm166 333 74-74 75 75q4 4 9.5 3.5t9.5-4.5q4-4 4-9.5t-4-9.5l-75-74 75-75q4-4 4-9.5t-4-9.5q-4-4-9.5-4t-9.5 4l-75 75-75-75q-4-4-9-4t-9 4q-4 4-4 9.5t4 9.5l74 75-75 75q-4 4-3.5 9t4.5 9q4 4 9.5 4t9.5-4Z"/>
    </Icon>
  );
});

IconMaterialTabCloseW100.displayName = 'AmauiIconMaterialTabCloseW100';

export default IconMaterialTabCloseW100;
