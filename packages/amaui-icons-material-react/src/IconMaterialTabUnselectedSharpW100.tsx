import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabUnselectedSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabUnselectedSharpW100'
      short_name='TabUnselected'

      {...props}
    >
      <path d="M15 18.7V18H17V18.7ZM8 6V5.3H10V6ZM12 10V5.3H20.7V10ZM19 18.7V18H20V16H20.7V18.7ZM11 18.7V18H13V18.7ZM20 14V12H20.7V14ZM3.3 15V13H4V15ZM3.3 11V9H4V11ZM3.3 18.7V17H4V18H5V18.7ZM3.3 7V5.3H6V6H4V7ZM7 18.7V18H9V18.7Z"/>
    </Icon>
  );
});

IconMaterialTabUnselectedSharpW100.displayName = 'AmauiIconMaterialTabUnselectedSharpW100';

export default IconMaterialTabUnselectedSharpW100;
