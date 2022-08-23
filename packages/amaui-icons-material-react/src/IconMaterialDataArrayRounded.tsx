import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataArrayRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayRounded'
      short_name='DataArray'

      {...props}
    >
      <path d="M18 18V6H16Q15.575 6 15.288 5.713Q15 5.425 15 5Q15 4.575 15.288 4.287Q15.575 4 16 4H18Q18.825 4 19.413 4.588Q20 5.175 20 6V18Q20 18.825 19.413 19.413Q18.825 20 18 20H16Q15.575 20 15.288 19.712Q15 19.425 15 19Q15 18.575 15.288 18.288Q15.575 18 16 18ZM6 18H8Q8.425 18 8.713 18.288Q9 18.575 9 19Q9 19.425 8.713 19.712Q8.425 20 8 20H6Q5.175 20 4.588 19.413Q4 18.825 4 18V6Q4 5.175 4.588 4.588Q5.175 4 6 4H8Q8.425 4 8.713 4.287Q9 4.575 9 5Q9 5.425 8.713 5.713Q8.425 6 8 6H6Z"/>
    </Icon>
  );
});

IconMaterialDataArrayRounded.displayName = 'AmauiIconMaterialDataArrayRounded';

export default IconMaterialDataArrayRounded;
