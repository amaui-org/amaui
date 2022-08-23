import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardCapslockRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardCapslockRoundedFilled'
      short_name='KeyboardCapslock'

      {...props}
    >
      <path d="M6.7 12.3Q6.425 12.025 6.425 11.6Q6.425 11.175 6.7 10.9L11.3 6.3Q11.45 6.15 11.625 6.087Q11.8 6.025 12 6.025Q12.2 6.025 12.388 6.1Q12.575 6.175 12.7 6.3L17.3 10.9Q17.575 11.175 17.575 11.6Q17.575 12.025 17.3 12.3Q17.025 12.575 16.6 12.575Q16.175 12.575 15.9 12.3L12 8.4L8.1 12.3Q7.825 12.575 7.4 12.575Q6.975 12.575 6.7 12.3ZM7 18Q6.575 18 6.287 17.712Q6 17.425 6 17Q6 16.575 6.287 16.288Q6.575 16 7 16H17Q17.425 16 17.712 16.288Q18 16.575 18 17Q18 17.425 17.712 17.712Q17.425 18 17 18Z"/>
    </Icon>
  );
});

IconMaterialKeyboardCapslockRoundedFilled.displayName = 'AmauiIconMaterialKeyboardCapslockRoundedFilled';

export default IconMaterialKeyboardCapslockRoundedFilled;
