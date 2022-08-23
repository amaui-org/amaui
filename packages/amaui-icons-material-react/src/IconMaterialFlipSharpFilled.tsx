import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipSharpFilled'
      short_name='Flip'

      {...props}
    >
      <path d="M3 21V3H9V5H5V19H9V21ZM11 23V1H13V23ZM19 5V3H21V5ZM19 13V11H21V13ZM19 21V19H21V21ZM19 9V7H21V9ZM19 17V15H21V17ZM15 21V19H17V21ZM15 5V3H17V5Z"/>
    </Icon>
  );
});

IconMaterialFlipSharpFilled.displayName = 'AmauiIconMaterialFlipSharpFilled';

export default IconMaterialFlipSharpFilled;
