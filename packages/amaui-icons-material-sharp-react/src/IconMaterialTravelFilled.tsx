import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTravelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelFilled'

      short_name='Travel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m146-344 42-42 100 14 156-156-312-170 56-56 382 98 156-154q17-17 42-17t42 17q17 17 17 42t-17 42L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128-128-70Z"/>
    </Icon>
  );
});

IconMaterialTravelFilled.displayName = 'AmauiIconMaterialTravelFilled';

export default IconMaterialTravelFilled;
