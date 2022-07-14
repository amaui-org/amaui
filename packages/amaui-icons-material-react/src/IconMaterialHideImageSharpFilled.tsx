import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageSharpFilled'
      short_name='HideImage'

      {...props}
    >
      <path d="M21 18.15 5.85 3H21ZM19.8 22.6 18.2 21H3V5.8L1.4 4.2L2.8 2.8L21.2 21.2ZM6 17H14.175L12.075 14.9L11.25 16L9 13Z"/>
    </Icon>
  );
});

export default IconMaterialHideImageSharpFilled;
