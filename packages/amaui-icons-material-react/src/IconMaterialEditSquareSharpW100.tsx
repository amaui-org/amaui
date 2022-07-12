import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditSquareSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditSquareSharpW100'
      short_name='EditSquare'

      {...props}
    >
      <path d="M4.3 22.4V7h9.425l-.7.7H5v14h14v-8.025l.7-.7V22.4Zm7.7-7.7Zm5.1-7.525.525.5-6.625 6.6V15.7h1.4l6.675-6.625.475.475-6.825 6.85H10.3v-2.425Zm2.45 2.375L17.1 7.175l2.95-2.95 2.525 2.3Z"/>
    </Icon>
  )
});

export default IconMaterialEditSquareSharpW100;
