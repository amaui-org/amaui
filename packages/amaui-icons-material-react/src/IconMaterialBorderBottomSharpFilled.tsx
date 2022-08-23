import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderBottomSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottomSharpFilled'
      short_name='BorderBottom'

      {...props}
    >
      <path d="M7 5V3H9V5ZM7 13V11H9V13ZM11 13V11H13V13ZM11 5V3H13V5ZM3 9V7H5V9ZM3 5V3H5V5ZM3 13V11H5V13ZM3 17V15H5V17ZM11 9V7H13V9ZM19 17V15H21V17ZM19 13V11H21V13ZM3 21V19H21V21ZM19 9V7H21V9ZM15 5V3H17V5ZM11 17V15H13V17ZM19 5V3H21V5ZM15 13V11H17V13Z"/>
    </Icon>
  );
});

IconMaterialBorderBottomSharpFilled.displayName = 'AmauiIconMaterialBorderBottomSharpFilled';

export default IconMaterialBorderBottomSharpFilled;
