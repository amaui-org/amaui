import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWestRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestRounded'
      short_name='West'

      {...props}
    >
      <path d="M8.3 18.3 2.7 12.7Q2.55 12.55 2.488 12.375Q2.425 12.2 2.425 12Q2.425 11.8 2.488 11.625Q2.55 11.45 2.7 11.3L8.3 5.7Q8.575 5.425 8.988 5.425Q9.4 5.425 9.7 5.7Q10 6 10 6.412Q10 6.825 9.7 7.125L5.825 11H21Q21.425 11 21.712 11.287Q22 11.575 22 12Q22 12.425 21.712 12.712Q21.425 13 21 13H5.825L9.7 16.9Q9.975 17.175 9.988 17.587Q10 18 9.7 18.3Q9.425 18.575 9 18.575Q8.575 18.575 8.3 18.3Z"/>
    </Icon>
  );
});

IconMaterialWestRounded.displayName = 'AmauiIconMaterialWestRounded';

export default IconMaterialWestRounded;
