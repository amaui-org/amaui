import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardBackspaceRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspaceRounded'
      short_name='KeyboardBackspace'

      {...props}
    >
      <path d="M8.3 17.3 3.7 12.7Q3.55 12.55 3.488 12.375Q3.425 12.2 3.425 12Q3.425 11.8 3.488 11.625Q3.55 11.45 3.7 11.3L8.325 6.675Q8.6 6.4 9 6.4Q9.4 6.4 9.7 6.7Q9.975 6.975 9.975 7.4Q9.975 7.825 9.7 8.1L6.8 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13H6.8L9.725 15.925Q10 16.2 10 16.6Q10 17 9.7 17.3Q9.425 17.575 9 17.575Q8.575 17.575 8.3 17.3Z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspaceRounded.displayName = 'AmauiIconMaterialKeyboardBackspaceRounded';

export default IconMaterialKeyboardBackspaceRounded;
