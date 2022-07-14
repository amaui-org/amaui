import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltSharp'
      short_name='ArrowRightAlt'

      {...props}
    >
      <path d="M14 18 12.6 16.55 16.15 13H4V11H16.15L12.6 7.45L14 6L20 12Z"/>
    </Icon>
  );
});

export default IconMaterialArrowRightAltSharp;
