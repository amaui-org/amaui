import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumRoundedFilled'
      short_name='Forum'

      {...props}
    >
      <path d="M2 15.8V3Q2 2.575 2.288 2.287Q2.575 2 3 2H16Q16.425 2 16.712 2.287Q17 2.575 17 3V12Q17 12.425 16.712 12.712Q16.425 13 16 13H6L2.85 16.15Q2.625 16.375 2.312 16.262Q2 16.15 2 15.8ZM7 18Q6.575 18 6.287 17.712Q6 17.425 6 17V15H19V6H21Q21.425 6 21.712 6.287Q22 6.575 22 7V20.8Q22 21.15 21.688 21.262Q21.375 21.375 21.15 21.15L18 18Z"/>
    </Icon>
  );
});

IconMaterialForumRoundedFilled.displayName = 'AmauiIconMaterialForumRoundedFilled';

export default IconMaterialForumRoundedFilled;
