import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenRoundedFilled'
      short_name='Splitscreen'

      {...props}
    >
      <path d="M6 11Q5.175 11 4.588 10.412Q4 9.825 4 9V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V9Q20 9.825 19.413 10.412Q18.825 11 18 11ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V15Q4 14.175 4.588 13.587Q5.175 13 6 13H18Q18.825 13 19.413 13.587Q20 14.175 20 15V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRoundedFilled.displayName = 'AmauiIconMaterialSplitscreenRoundedFilled';

export default IconMaterialSplitscreenRoundedFilled;
