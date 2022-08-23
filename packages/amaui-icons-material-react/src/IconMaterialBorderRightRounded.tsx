import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderRightRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderRightRounded'
      short_name='BorderRight'

      {...props}
    >
      <path d="M3 9V7H5V9ZM11 9V7H13V9ZM11 13V11H13V13ZM3 13V11H5V13ZM7 5V3H9V5ZM3 5V3H5V5ZM11 5V3H13V5ZM15 5V3H17V5ZM7 13V11H9V13ZM15 21V19H17V21ZM11 21V19H13V21ZM20 21Q19.575 21 19.288 20.712Q19 20.425 19 20V4Q19 3.575 19.288 3.287Q19.575 3 20 3Q20.425 3 20.712 3.287Q21 3.575 21 4V20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM7 21V19H9V21ZM3 17V15H5V17ZM15 13V11H17V13ZM3 21V19H5V21ZM11 17V15H13V17Z"/>
    </Icon>
  );
});

IconMaterialBorderRightRounded.displayName = 'AmauiIconMaterialBorderRightRounded';

export default IconMaterialBorderRightRounded;
