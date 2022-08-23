import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraFrontRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFrontRoundedW100Filled'
      short_name='PhotoCameraFront'

      {...props}
    >
      <path d="M8.9 15.85H15.1V15.8Q15.1 15 14.288 14.575Q13.475 14.15 12 14.15Q10.525 14.15 9.713 14.575Q8.9 15 8.9 15.8ZM12 12.35Q12.575 12.35 12.963 11.962Q13.35 11.575 13.35 11Q13.35 10.425 12.963 10.037Q12.575 9.65 12 9.65Q11.425 9.65 11.038 10.037Q10.65 10.425 10.65 11Q10.65 11.575 11.038 11.962Q11.425 12.35 12 12.35ZM4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H7.7L9.1 4.775Q9.325 4.55 9.613 4.425Q9.9 4.3 10.2 4.3H13.8Q14.1 4.3 14.388 4.425Q14.675 4.55 14.9 4.775L16.3 6.3H19.2Q19.85 6.3 20.275 6.725Q20.7 7.15 20.7 7.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontRoundedW100Filled.displayName = 'AmauiIconMaterialPhotoCameraFrontRoundedW100Filled';

export default IconMaterialPhotoCameraFrontRoundedW100Filled;
