import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShuffleOnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOnSharpFilled'
      short_name='ShuffleOn'

      {...props}
    >
      <path d="M1 23V1H23V23ZM9.175 10.575 10.575 9.175 5.4 4 4 5.4ZM14 20H20V14H18V16.55L14.825 13.375L13.4 14.8L16.6 18H14ZM5.4 20 18 7.4V10H20V4H14V6H16.6L4 18.6Z"/>
    </Icon>
  );
});

export default IconMaterialShuffleOnSharpFilled;
