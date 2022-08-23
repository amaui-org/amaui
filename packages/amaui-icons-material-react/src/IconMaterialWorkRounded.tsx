import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkRounded'
      short_name='Work'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4ZM4 19H20Q20 19 20 19Q20 19 20 19V8Q20 8 20 8Q20 8 20 8H4Q4 8 4 8Q4 8 4 8V19Q4 19 4 19Q4 19 4 19ZM4 19Q4 19 4 19Q4 19 4 19V8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8V19Q4 19 4 19Q4 19 4 19Z"/>
    </Icon>
  );
});

IconMaterialWorkRounded.displayName = 'AmauiIconMaterialWorkRounded';

export default IconMaterialWorkRounded;
