import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSchoolSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchoolSharpW700'
      short_name='School'

      {...props}
    >
      <path d="M12 21.35 4.65 17.4V11.4L0.275 9L12 2.625L23.725 9V17.375H20.95V10.525L19.35 11.4V17.4ZM12 12.2 17.925 9 12 5.8 6.075 9ZM12 18.2 16.575 15.725V12.9L12 15.375L7.425 12.9V15.725ZM12 12.2ZM12 14.8ZM12 14.8Z"/>
    </Icon>
  )
});

export default IconMaterialSchoolSharpW700;
