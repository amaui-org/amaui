import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLastPageRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageRounded'
      short_name='LastPage'

      {...props}
    >
      <path d="M6.3 17.3Q6.025 17.025 6.025 16.6Q6.025 16.175 6.3 15.9L10.2 12L6.3 8.1Q6.025 7.825 6.025 7.4Q6.025 6.975 6.3 6.7Q6.575 6.425 7 6.425Q7.425 6.425 7.7 6.7L12.3 11.3Q12.45 11.45 12.513 11.625Q12.575 11.8 12.575 12Q12.575 12.2 12.513 12.375Q12.45 12.55 12.3 12.7L7.7 17.3Q7.425 17.575 7 17.575Q6.575 17.575 6.3 17.3ZM17 18Q16.575 18 16.288 17.712Q16 17.425 16 17V7Q16 6.575 16.288 6.287Q16.575 6 17 6Q17.425 6 17.712 6.287Q18 6.575 18 7V17Q18 17.425 17.712 17.712Q17.425 18 17 18Z"/>
    </Icon>
  );
});

IconMaterialLastPageRounded.displayName = 'AmauiIconMaterialLastPageRounded';

export default IconMaterialLastPageRounded;
