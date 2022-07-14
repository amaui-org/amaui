import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipToBackSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBackSharpFilled'
      short_name='FlipToBack'

      {...props}
    >
      <path d="M7 9V7H9V9ZM7 13V11H9V13ZM7 5V3H9V5ZM11 17V15H13V17ZM19 5V3H21V5ZM11 5V3H13V5ZM7 17V15H9V17ZM19 13V11H21V13ZM19 9V7H21V9ZM19 17V15H21V17ZM3 21V7H5V19H17V21ZM15 5V3H17V5ZM15 17V15H17V17Z"/>
    </Icon>
  );
});

export default IconMaterialFlipToBackSharpFilled;
