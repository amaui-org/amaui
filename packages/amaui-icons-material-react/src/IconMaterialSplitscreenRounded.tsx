import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenRounded'
      short_name='Splitscreen'

      {...props}
    >
      <path d="M6 9H18Q18 9 18 9Q18 9 18 9V4Q18 4 18 4Q18 4 18 4H6Q6 4 6 4Q6 4 6 4V9Q6 9 6 9Q6 9 6 9ZM6 11Q5.175 11 4.588 10.412Q4 9.825 4 9V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V9Q20 9.825 19.413 10.412Q18.825 11 18 11ZM6 20H18Q18 20 18 20Q18 20 18 20V15Q18 15 18 15Q18 15 18 15H6Q6 15 6 15Q6 15 6 15V20Q6 20 6 20Q6 20 6 20ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V15Q4 14.175 4.588 13.587Q5.175 13 6 13H18Q18.825 13 19.413 13.587Q20 14.175 20 15V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 9Q6 9 6 9Q6 9 6 9V4Q6 4 6 4Q6 4 6 4Q6 4 6 4Q6 4 6 4V9Q6 9 6 9Q6 9 6 9ZM6 20Q6 20 6 20Q6 20 6 20V15Q6 15 6 15Q6 15 6 15Q6 15 6 15Q6 15 6 15V20Q6 20 6 20Q6 20 6 20Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRounded.displayName = 'AmauiIconMaterialSplitscreenRounded';

export default IconMaterialSplitscreenRounded;
