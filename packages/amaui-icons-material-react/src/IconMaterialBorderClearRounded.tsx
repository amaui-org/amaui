import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderClearRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderClearRounded'
      short_name='BorderClear'

      {...props}
    >
      <path d="M7 5V3H9V5ZM7 13V11H9V13ZM7 21V19H9V21ZM11 17V15H13V17ZM11 21V19H13V21ZM3 21V19H5V21ZM3 17V15H5V17ZM3 13V11H5V13ZM3 9V7H5V9ZM3 5V3H5V5ZM11 13V11H13V13ZM19 17V15H21V17ZM19 13V11H21V13ZM19 21V19H21V21ZM19 9V7H21V9ZM11 9V7H13V9ZM19 5V3H21V5ZM11 5V3H13V5ZM15 21V19H17V21ZM15 13V11H17V13ZM15 5V3H17V5Z"/>
    </Icon>
  );
});

IconMaterialBorderClearRounded.displayName = 'AmauiIconMaterialBorderClearRounded';

export default IconMaterialBorderClearRounded;
