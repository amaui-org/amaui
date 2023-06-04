import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowRangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRangeW100Filled'

      short_name='ArrowRange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m170 590 120 121q4 4 4 9.5t-4 9.5q-4 5-10 4.5t-10-4.5L137 597q-9-9-9-21t9-21l133-132q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10L170 562h619L670 443q-4-4-4.5-9.5T670 423q5-5 10-5t10 5l132 132q9 9 9 21t-9 21L690 730q-4 5-9.5 5t-10.5-5q-5-5-4.5-10t4.5-10l119-120H170Z"/>
    </Icon>
  );
});

IconMaterialArrowRangeW100Filled.displayName = 'AmauiIconMaterialArrowRangeW100Filled';

export default IconMaterialArrowRangeW100Filled;
