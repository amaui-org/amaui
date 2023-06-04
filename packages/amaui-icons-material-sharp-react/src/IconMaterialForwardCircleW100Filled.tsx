import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardCircleW100Filled'

      short_name='ForwardCircle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.24 780q84.76 0 144.26-59.67Q684 660.66 684 576h-28q0 73-51.561 124.5-51.56 51.5-124.5 51.5Q407 752 355.5 700.439q-51.5-51.56-51.5-124.5Q304 503 355.543 451.5T480 400h6l-47 47 20 20 81-81-82-82-20 20 48 48q-87 0-148.5 59T276 576q0 84.66 59.74 144.33Q395.481 780 480.24 780Zm-.066 144Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924Z"/>
    </Icon>
  );
});

IconMaterialForwardCircleW100Filled.displayName = 'AmauiIconMaterialForwardCircleW100Filled';

export default IconMaterialForwardCircleW100Filled;
