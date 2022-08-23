import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardRoundedFilled'
      short_name='Keyboard'

      {...props}
    >
      <path d="M4 19Q3.175 19 2.588 18.413Q2 17.825 2 17V7Q2 6.175 2.588 5.588Q3.175 5 4 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V17Q22 17.825 21.413 18.413Q20.825 19 20 19ZM11 10H13V8H11ZM11 13H13V11H11ZM8 10H10V8H8ZM8 13H10V11H8ZM5 13H7V11H5ZM5 10H7V8H5ZM9 16H15Q15.425 16 15.713 15.712Q16 15.425 16 15Q16 14.575 15.713 14.287Q15.425 14 15 14H9Q8.575 14 8.288 14.287Q8 14.575 8 15Q8 15.425 8.288 15.712Q8.575 16 9 16ZM14 13H16V11H14ZM14 10H16V8H14ZM17 13H19V11H17ZM17 10H19V8H17Z"/>
    </Icon>
  );
});

IconMaterialKeyboardRoundedFilled.displayName = 'AmauiIconMaterialKeyboardRoundedFilled';

export default IconMaterialKeyboardRoundedFilled;
