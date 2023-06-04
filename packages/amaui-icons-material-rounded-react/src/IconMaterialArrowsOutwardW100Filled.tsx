import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsOutwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsOutwardW100Filled'

      short_name='ArrowsOutward'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m196 591 120 120q4 4 4 9t-4 9q-4 4-9.5 4t-9.5-4L164 597q-9-9-9-21t9-21l132-132q4-4 9.5-4.5T316 423q5 5 5 10t-5 10L197 562h229q6 0 10 4t4 10q0 6-4 10t-10 4l-230 1Zm567-1H534q-6 0-10-4t-4-10q0-6 4-10t10-4l230-1-120-120q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l132 133q9 9 9 21t-9 21L664 729q-4 4-9.5 4.5T644 729q-5-5-5-10t5-10l119-119Z"/>
    </Icon>
  );
});

IconMaterialArrowsOutwardW100Filled.displayName = 'AmauiIconMaterialArrowsOutwardW100Filled';

export default IconMaterialArrowsOutwardW100Filled;
