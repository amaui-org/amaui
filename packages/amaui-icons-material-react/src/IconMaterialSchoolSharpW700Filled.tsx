import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchoolSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolSharpW700Filled'
      short_name='School'

      {...props}
    >
      <path d="M20.95 17.375V10.525L12 15.4L0.275 9L12 2.625L23.725 9V17.375ZM12 21.35 4.65 17.4V12.775L12 16.775L19.35 12.775V17.4Z"/>
    </Icon>
  )
});

export default IconMaterialSchoolSharpW700Filled;
