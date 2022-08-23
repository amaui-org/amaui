import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtrRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtrRounded'
      short_name='Atr'

      {...props}
    >
      <path d="M6 20Q4.75 20 3.875 19.125Q3 18.25 3 17Q3 15.75 3.875 14.875Q4.75 14 6 14Q7.25 14 8.125 14.875Q9 15.75 9 17Q9 18.25 8.125 19.125Q7.25 20 6 20ZM12 10Q10.75 10 9.875 9.125Q9 8.25 9 7Q9 5.75 9.875 4.875Q10.75 4 12 4Q13.25 4 14.125 4.875Q15 5.75 15 7Q15 8.25 14.125 9.125Q13.25 10 12 10ZM18 20Q16.75 20 15.875 19.125Q15 18.25 15 17Q15 15.75 15.875 14.875Q16.75 14 18 14Q19.25 14 20.125 14.875Q21 15.75 21 17Q21 18.25 20.125 19.125Q19.25 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialAtrRounded.displayName = 'AmauiIconMaterialAtrRounded';

export default IconMaterialAtrRounded;
