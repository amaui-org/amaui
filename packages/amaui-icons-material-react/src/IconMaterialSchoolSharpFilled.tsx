import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchoolSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolSharpFilled'
      short_name='School'

      {...props}
    >
      <path d="M21 17V10.1L12 15L1 9L12 3L23 9V17ZM12 21 5 17.2V12.2L12 16L19 12.2V17.2Z"/>
    </Icon>
  )
});

export default IconMaterialSchoolSharpFilled;
