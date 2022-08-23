import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchoolSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolSharpW100'
      short_name='School'

      {...props}
    >
      <path d="M12 18 6.3 14.9V10.4L3.7 9L12 4.5L20.3 9V14.9H19.6V9.4L17.7 10.4V14.9ZM12 12.7 18.825 9 12 5.3 5.175 9ZM12 17.2 17 14.5V10.8L12 13.5L7 10.8V14.5ZM12 12.7ZM12 13.8ZM12 13.8Z"/>
    </Icon>
  );
});

IconMaterialSchoolSharpW100.displayName = 'AmauiIconMaterialSchoolSharpW100';

export default IconMaterialSchoolSharpW100;
