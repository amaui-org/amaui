import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowRounded'
      short_name='Window'

      {...props}
    >
      <path d="M20 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM11 11V4H4Q4 4 4 4Q4 4 4 4V11ZM11 13H4V20Q4 20 4 20Q4 20 4 20H11ZM13 13V20H20Q20 20 20 20Q20 20 20 20V13ZM13 11H20V4Q20 4 20 4Q20 4 20 4H13Z"/>
    </Icon>
  );
});

IconMaterialWindowRounded.displayName = 'AmauiIconMaterialWindowRounded';

export default IconMaterialWindowRounded;
