import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShuffleOnSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOnSharpW100'
      short_name='ShuffleOn'

      {...props}
    >
      <path d="M2.3 21.7V2.3H21.7V21.7ZM9.4 9.85 9.875 9.375 5.4 4.9 4.925 5.375ZM14.65 19.35H19.35V14.65H18.65V18.1L14.65 14.1L14.15 14.6L18.2 18.65H14.65ZM5.4 19.1 18.65 5.85V9.35H19.35V4.65H14.65V5.35H18.15L4.9 18.6Z"/>
    </Icon>
  );
});

IconMaterialShuffleOnSharpW100.displayName = 'AmauiIconMaterialShuffleOnSharpW100';

export default IconMaterialShuffleOnSharpW100;
