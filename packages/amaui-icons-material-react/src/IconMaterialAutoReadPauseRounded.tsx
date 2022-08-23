import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPauseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPauseRounded'
      short_name='AutoReadPause'

      {...props}
    >
      <path d="M10 14Q10.425 14 10.713 13.712Q11 13.425 11 13V7Q11 6.575 10.713 6.287Q10.425 6 10 6Q9.575 6 9.288 6.287Q9 6.575 9 7V13Q9 13.425 9.288 13.712Q9.575 14 10 14ZM14 14Q14.425 14 14.713 13.712Q15 13.425 15 13V7Q15 6.575 14.713 6.287Q14.425 6 14 6Q13.575 6 13.288 6.287Q13 6.575 13 7V13Q13 13.425 13.288 13.712Q13.575 14 14 14ZM3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6ZM4 17.175 5.175 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16Q4 16 4 16Q4 16 4 16V17.175Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPauseRounded.displayName = 'AmauiIconMaterialAutoReadPauseRounded';

export default IconMaterialAutoReadPauseRounded;
