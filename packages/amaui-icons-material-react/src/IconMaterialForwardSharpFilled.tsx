import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardSharpFilled'
      short_name='Forward'

      {...props}
    >
      <path d="M3 19V15Q3 12.925 4.463 11.462Q5.925 10 8 10H17.2L13.6 6.4L15 5L21 11L15 17L13.6 15.6L17.2 12H8Q6.75 12 5.875 12.875Q5 13.75 5 15V19Z"/>
    </Icon>
  );
});

IconMaterialForwardSharpFilled.displayName = 'AmauiIconMaterialForwardSharpFilled';

export default IconMaterialForwardSharpFilled;
