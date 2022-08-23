import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderLeftRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderLeftRounded'
      short_name='BorderLeft'

      {...props}
    >
      <path d="M19 9V7H21V9ZM11 9V7H13V9ZM11 13V11H13V13ZM19 13V11H21V13ZM15 5V3H17V5ZM19 5V3H21V5ZM11 5V3H13V5ZM7 5V3H9V5ZM15 13V11H17V13ZM7 21V19H9V21ZM11 21V19H13V21ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V4Q3 3.575 3.288 3.287Q3.575 3 4 3Q4.425 3 4.713 3.287Q5 3.575 5 4V20Q5 20.425 4.713 20.712Q4.425 21 4 21ZM15 21V19H17V21ZM19 17V15H21V17ZM7 13V11H9V13ZM19 21V19H21V21ZM11 17V15H13V17Z"/>
    </Icon>
  );
});

IconMaterialBorderLeftRounded.displayName = 'AmauiIconMaterialBorderLeftRounded';

export default IconMaterialBorderLeftRounded;
