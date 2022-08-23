import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapVertSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVertSharpFilled'
      short_name='SwapVert'

      {...props}
    >
      <path d="M15 22 10 17 11.425 15.6 14 18.175V11H16V18.175L18.575 15.6L20 17ZM8 13V5.825L5.425 8.4L4 7L9 2L14 7L12.575 8.4L10 5.825V13Z"/>
    </Icon>
  );
});

IconMaterialSwapVertSharpFilled.displayName = 'AmauiIconMaterialSwapVertSharpFilled';

export default IconMaterialSwapVertSharpFilled;
