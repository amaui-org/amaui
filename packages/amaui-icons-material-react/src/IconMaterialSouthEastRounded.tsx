import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthEastRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastRounded'
      short_name='SouthEast'

      {...props}
    >
      <path d="M10 19Q9.575 19 9.288 18.712Q9 18.425 9 18Q9 17.575 9.288 17.288Q9.575 17 10 17H15.6L4.7 6.1Q4.425 5.825 4.425 5.4Q4.425 4.975 4.7 4.7Q4.975 4.425 5.4 4.425Q5.825 4.425 6.1 4.7L17 15.6V10Q17 9.575 17.288 9.287Q17.575 9 18 9Q18.425 9 18.712 9.287Q19 9.575 19 10V18Q19 18.425 18.712 18.712Q18.425 19 18 19Z"/>
    </Icon>
  );
});

IconMaterialSouthEastRounded.displayName = 'AmauiIconMaterialSouthEastRounded';

export default IconMaterialSouthEastRounded;
