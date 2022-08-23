import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapHorizSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizSharpFilled'
      short_name='SwapHoriz'

      {...props}
    >
      <path d="M17 14 15.6 12.575 18.175 10H11V8H18.175L15.6 5.425L17 4L22 9ZM7 20 2 15 7 10 8.4 11.425 5.825 14H13V16H5.825L8.4 18.575Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizSharpFilled.displayName = 'AmauiIconMaterialSwapHorizSharpFilled';

export default IconMaterialSwapHorizSharpFilled;
