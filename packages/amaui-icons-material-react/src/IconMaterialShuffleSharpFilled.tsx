import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShuffleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleSharpFilled'
      short_name='Shuffle'

      {...props}
    >
      <path d="M9.175 10.575 4 5.4 5.4 4 10.575 9.175ZM14 20V18H16.6L13.4 14.8L14.825 13.375L18 16.55V14H20V20ZM5.4 20 4 18.6 16.6 6H14V4H20V10H18V7.4Z"/>
    </Icon>
  );
});

IconMaterialShuffleSharpFilled.displayName = 'AmauiIconMaterialShuffleSharpFilled';

export default IconMaterialShuffleSharpFilled;
