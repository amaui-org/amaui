import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardTabRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabRoundedFilled'
      short_name='KeyboardTab'

      {...props}
    >
      <path d="M12.3 17.3Q12.025 17.025 12.025 16.6Q12.025 16.175 12.3 15.9L15.2 13H3Q2.575 13 2.288 12.712Q2 12.425 2 12Q2 11.575 2.288 11.287Q2.575 11 3 11H15.2L12.3 8.1Q12.025 7.825 12.025 7.4Q12.025 6.975 12.3 6.7Q12.575 6.425 13 6.425Q13.425 6.425 13.7 6.7L18.3 11.3Q18.45 11.45 18.512 11.625Q18.575 11.8 18.575 12Q18.575 12.2 18.512 12.375Q18.45 12.55 18.3 12.7L13.7 17.3Q13.425 17.575 13 17.575Q12.575 17.575 12.3 17.3ZM21 18Q20.575 18 20.288 17.712Q20 17.425 20 17V7Q20 6.575 20.288 6.287Q20.575 6 21 6Q21.425 6 21.712 6.287Q22 6.575 22 7V17Q22 17.425 21.712 17.712Q21.425 18 21 18Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabRoundedFilled.displayName = 'AmauiIconMaterialKeyboardTabRoundedFilled';

export default IconMaterialKeyboardTabRoundedFilled;
