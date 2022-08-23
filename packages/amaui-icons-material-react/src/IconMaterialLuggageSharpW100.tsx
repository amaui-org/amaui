import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLuggageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LuggageSharpW100'
      short_name='Luggage'

      {...props}
    >
      <path d="M6.3 19.7V7.3H9.65V4.05H14.35V7.3H17.7V19.7H16.2Q16.2 20 16 20.2Q15.8 20.4 15.5 20.4Q15.2 20.4 15 20.2Q14.8 20 14.8 19.7H9.2Q9.2 20 9 20.2Q8.8 20.4 8.5 20.4Q8.2 20.4 8 20.2Q7.8 20 7.8 19.7ZM10.35 7.3H13.65V4.75H10.35ZM7 19H17V8H7ZM8.4 17.35H9.1V9.65H8.4ZM11.65 17.35H12.35V9.65H11.65ZM14.9 17.35H15.6V9.65H14.9ZM7 19V8Z"/>
    </Icon>
  );
});

IconMaterialLuggageSharpW100.displayName = 'AmauiIconMaterialLuggageSharpW100';

export default IconMaterialLuggageSharpW100;
