import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardRoundedW100Filled'
      short_name='Keyboard'

      {...props}
    >
      <path d="M4.8 17.7Q4.15 17.7 3.725 17.275Q3.3 16.85 3.3 16.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H19.2Q19.85 6.3 20.275 6.725Q20.7 7.15 20.7 7.8V16.2Q20.7 16.85 20.275 17.275Q19.85 17.7 19.2 17.7ZM11.3 9.7H12.7V8.3H11.3ZM11.3 12.7H12.7V11.3H11.3ZM8.3 9.7H9.7V8.3H8.3ZM8.3 12.7H9.7V11.3H8.3ZM5.3 12.7H6.7V11.3H5.3ZM5.3 9.7H6.7V8.3H5.3ZM9 15.7H15Q15.275 15.7 15.488 15.488Q15.7 15.275 15.7 15Q15.7 14.725 15.488 14.512Q15.275 14.3 15 14.3H9Q8.725 14.3 8.512 14.512Q8.3 14.725 8.3 15Q8.3 15.275 8.512 15.488Q8.725 15.7 9 15.7ZM14.3 12.7H15.7V11.3H14.3ZM14.3 9.7H15.7V8.3H14.3ZM17.3 12.7H18.7V11.3H17.3ZM17.3 9.7H18.7V8.3H17.3Z"/>
    </Icon>
  );
});

IconMaterialKeyboardRoundedW100Filled.displayName = 'AmauiIconMaterialKeyboardRoundedW100Filled';

export default IconMaterialKeyboardRoundedW100Filled;
