import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchoolSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolSharpW100Filled'
      short_name='School'

      {...props}
    >
      <path d="M19.6 14.9V9.4L12 13.5L3.7 9L12 4.5L20.3 9V14.9ZM12 18 6.3 14.9V11.1L12 14.2L17.7 11.1V14.9Z"/>
    </Icon>
  )
});

export default IconMaterialSchoolSharpW100Filled;
