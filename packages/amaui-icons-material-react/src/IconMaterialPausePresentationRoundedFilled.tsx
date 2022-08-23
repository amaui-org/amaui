import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationRoundedFilled'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M10 16Q10.425 16 10.713 15.712Q11 15.425 11 15V9Q11 8.575 10.713 8.287Q10.425 8 10 8Q9.575 8 9.288 8.287Q9 8.575 9 9V15Q9 15.425 9.288 15.712Q9.575 16 10 16ZM14 16Q14.425 16 14.713 15.712Q15 15.425 15 15V9Q15 8.575 14.713 8.287Q14.425 8 14 8Q13.575 8 13.288 8.287Q13 8.575 13 9V15Q13 15.425 13.288 15.712Q13.575 16 14 16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationRoundedFilled.displayName = 'AmauiIconMaterialPausePresentationRoundedFilled';

export default IconMaterialPausePresentationRoundedFilled;
