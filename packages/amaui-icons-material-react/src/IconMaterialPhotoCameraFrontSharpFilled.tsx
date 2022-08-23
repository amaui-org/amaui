import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraFrontSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraFrontSharpFilled'
      short_name='PhotoCameraFront'

      {...props}
    >
      <path d="M8 17H16V16.45Q16 15.325 14.9 14.662Q13.8 14 12 14Q10.2 14 9.1 14.662Q8 15.325 8 16.45ZM12 13Q12.825 13 13.413 12.412Q14 11.825 14 11Q14 10.175 13.413 9.587Q12.825 9 12 9Q11.175 9 10.588 9.587Q10 10.175 10 11Q10 11.825 10.588 12.412Q11.175 13 12 13ZM2 21V5H7.15L9 3H15L16.85 5H22V21Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraFrontSharpFilled.displayName = 'AmauiIconMaterialPhotoCameraFrontSharpFilled';

export default IconMaterialPhotoCameraFrontSharpFilled;
