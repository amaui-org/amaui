import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLuggageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LuggageSharpFilled'
      short_name='Luggage'

      {...props}
    >
      <path d="M5 21V6H9V2H15V6H19V21H17Q17 21.425 16.712 21.712Q16.425 22 16 22Q15.575 22 15.288 21.712Q15 21.425 15 21H9Q9 21.425 8.713 21.712Q8.425 22 8 22Q7.575 22 7.287 21.712Q7 21.425 7 21ZM10.5 6H13.5V3.5H10.5ZM8 18H9.5V9H8ZM11.25 18H12.75V9H11.25ZM14.5 18H16V9H14.5Z"/>
    </Icon>
  );
});

IconMaterialLuggageSharpFilled.displayName = 'AmauiIconMaterialLuggageSharpFilled';

export default IconMaterialLuggageSharpFilled;
