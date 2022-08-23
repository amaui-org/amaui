import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter9PlusSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9PlusSharpFilled'
      short_name='Filter9Plus'

      {...props}
    >
      <path d="M10 14H14V6H9V11H12V12H10ZM12 9H11V8H12ZM6 18V2H22V18ZM2 22V6H4V20H18V22ZM16.5 13H18.5V11H20.5V9H18.5V7H16.5V9H14.5V11H16.5Z"/>
    </Icon>
  );
});

IconMaterialFilter9PlusSharpFilled.displayName = 'AmauiIconMaterialFilter9PlusSharpFilled';

export default IconMaterialFilter9PlusSharpFilled;
