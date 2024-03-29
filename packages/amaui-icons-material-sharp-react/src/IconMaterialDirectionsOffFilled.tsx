import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffFilled'

      short_name='DirectionsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8l-4 4L1.2 12l5.425-5.425L12.25 12.2V15L.675 3.5 2.1 2.075l19.8 19.8ZM8 15h2v-3h2.025l-2-2H9q-.425 0-.712.287Q8 10.575 8 11Zm10.85.95-3.4-3.4L17 11l-3.5-3.5V10h-.6L8.05 5.15 12 1.2 22.8 12Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffFilled.displayName = 'AmauiIconMaterialDirectionsOffFilled';

export default IconMaterialDirectionsOffFilled;
