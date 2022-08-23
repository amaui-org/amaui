import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderTopRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderTopRounded'
      short_name='BorderTop'

      {...props}
    >
      <path d="M7 21V19H9V21ZM7 13V11H9V13ZM11 13V11H13V13ZM11 21V19H13V21ZM3 17V15H5V17ZM3 21V19H5V21ZM3 13V11H5V13ZM3 9V7H5V9ZM11 17V15H13V17ZM19 9V7H21V9ZM19 13V11H21V13ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5ZM19 17V15H21V17ZM15 21V19H17V21ZM11 9V7H13V9ZM19 21V19H21V21ZM15 13V11H17V13Z"/>
    </Icon>
  );
});

IconMaterialBorderTopRounded.displayName = 'AmauiIconMaterialBorderTopRounded';

export default IconMaterialBorderTopRounded;
