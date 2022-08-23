import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebStoriesRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStoriesRounded'
      short_name='WebStories'

      {...props}
    >
      <path d="M18 20V4Q18.825 4 19.413 4.588Q20 5.175 20 6V18Q20 18.825 19.413 19.413Q18.825 20 18 20ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V4Q3 3.175 3.587 2.587Q4.175 2 5 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V20Q16 20.825 15.413 21.413Q14.825 22 14 22ZM22 18V6Q22.625 6 23.062 6.438Q23.5 6.875 23.5 7.5V16.5Q23.5 17.125 23.062 17.562Q22.625 18 22 18ZM5 20H14Q14 20 14 20Q14 20 14 20V4Q14 4 14 4Q14 4 14 4H5Q5 4 5 4Q5 4 5 4V20Q5 20 5 20Q5 20 5 20ZM5 4Q5 4 5 4Q5 4 5 4V20Q5 20 5 20Q5 20 5 20Q5 20 5 20Q5 20 5 20V4Q5 4 5 4Q5 4 5 4Z"/>
    </Icon>
  );
});

IconMaterialWebStoriesRounded.displayName = 'AmauiIconMaterialWebStoriesRounded';

export default IconMaterialWebStoriesRounded;
