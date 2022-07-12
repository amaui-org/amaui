import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSharpFilled'
      short_name='Image'

      {...props}
    >
      <path d="M6 17H18L14.25 12L11.25 16L9 13ZM3 21V3H21V21Z"/>
    </Icon>
  )
});

export default IconMaterialImageSharpFilled;
