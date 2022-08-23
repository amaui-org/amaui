import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWarningRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningRounded'
      short_name='Warning'

      {...props}
    >
      <path d="M12 12.5ZM2.725 21Q2.15 21 1.875 20.5Q1.6 20 1.875 19.5L11.125 3.5Q11.4 3 12 3Q12.6 3 12.875 3.5L22.125 19.5Q22.4 20 22.125 20.5Q21.85 21 21.275 21ZM12 10Q11.575 10 11.288 10.287Q11 10.575 11 11V14Q11 14.425 11.288 14.712Q11.575 15 12 15Q12.425 15 12.713 14.712Q13 14.425 13 14V11Q13 10.575 12.713 10.287Q12.425 10 12 10ZM12 18Q12.425 18 12.713 17.712Q13 17.425 13 17Q13 16.575 12.713 16.288Q12.425 16 12 16Q11.575 16 11.288 16.288Q11 16.575 11 17Q11 17.425 11.288 17.712Q11.575 18 12 18ZM4.45 19H19.55L12 6Z"/>
    </Icon>
  );
});

IconMaterialWarningRounded.displayName = 'AmauiIconMaterialWarningRounded';

export default IconMaterialWarningRounded;
