import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShuffleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleSharpW100Filled'
      short_name='Shuffle'

      {...props}
    >
      <path d="M9.275 9.85 4.8 5.375 5.275 4.9 9.75 9.375ZM14.525 19.35V18.65H18.075L14.025 14.6L14.525 14.1L18.525 18.1V14.65H19.225V19.35ZM5.275 19.1 4.775 18.6 18.025 5.35H14.525V4.65H19.225V9.35H18.525V5.85Z"/>
    </Icon>
  )
});

export default IconMaterialShuffleSharpW100Filled;
