import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterRounded'
      short_name='AlignHorizontalCenter'

      {...props}
    >
      <path d="M12 22Q11.575 22 11.288 21.712Q11 21.425 11 21V17H7.5Q6.875 17 6.438 16.562Q6 16.125 6 15.5Q6 14.875 6.438 14.438Q6.875 14 7.5 14H11V10H4.5Q3.875 10 3.438 9.562Q3 9.125 3 8.5Q3 7.875 3.438 7.438Q3.875 7 4.5 7H11V3Q11 2.575 11.288 2.287Q11.575 2 12 2Q12.425 2 12.713 2.287Q13 2.575 13 3V7H19.5Q20.125 7 20.562 7.438Q21 7.875 21 8.5Q21 9.125 20.562 9.562Q20.125 10 19.5 10H13V14H16.5Q17.125 14 17.562 14.438Q18 14.875 18 15.5Q18 16.125 17.562 16.562Q17.125 17 16.5 17H13V21Q13 21.425 12.713 21.712Q12.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterRounded.displayName = 'AmauiIconMaterialAlignHorizontalCenterRounded';

export default IconMaterialAlignHorizontalCenterRounded;
