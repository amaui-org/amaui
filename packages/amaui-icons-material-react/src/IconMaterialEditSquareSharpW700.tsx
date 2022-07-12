import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareSharpW700'
      short_name='EditSquare'

      {...props}
    >
      <path d="M2.15 24.55V4.85H14.2L11.05 8H5.3v13.4h13.4v-5.725l3.15-3.15V24.55ZM12 14.7Zm3.75-8.575 1.925 1.9-6.425 6.35v1.075h1.05l6.425-6.375 1.85 1.85-7.15 7.175H8.6v-4.825Zm4.825 4.8-4.825-4.8 4.35-4.35 4.825 4.8Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareSharpW700;
