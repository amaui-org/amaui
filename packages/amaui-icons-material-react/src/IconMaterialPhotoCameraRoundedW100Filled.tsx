import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraRoundedW100Filled'
      short_name='PhotoCamera'

      {...props}
    >
      <path d="M12 16.5Q13.475 16.5 14.488 15.488Q15.5 14.475 15.5 13Q15.5 11.525 14.488 10.512Q13.475 9.5 12 9.5Q10.525 9.5 9.512 10.512Q8.5 11.525 8.5 13Q8.5 14.475 9.512 15.488Q10.525 16.5 12 16.5ZM4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H7.7L9.1 4.775Q9.325 4.55 9.613 4.425Q9.9 4.3 10.2 4.3H13.8Q14.1 4.3 14.388 4.425Q14.675 4.55 14.9 4.775L16.3 6.3H19.2Q19.85 6.3 20.275 6.725Q20.7 7.15 20.7 7.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraRoundedW100Filled.displayName = 'AmauiIconMaterialPhotoCameraRoundedW100Filled';

export default IconMaterialPhotoCameraRoundedW100Filled;
