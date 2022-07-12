import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter9PlusSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9PlusSharp'
      short_name='Filter9Plus'

      {...props}
    >
      <path d="M10 14H14V6H9V11H12V12H10ZM12 9H11V8H12ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16ZM16.5 13H18.5V11H20V9H18.5V7H16.5V9H14.5V11H16.5Z"/>
    </Icon>
  )
});

export default IconMaterialFilter9PlusSharp;
