import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudQueueRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudQueueRoundedFilled'
      short_name='CloudQueue'

      {...props}
    >
      <path d="M6.5 20Q4.225 20 2.613 18.425Q1 16.85 1 14.575Q1 12.625 2.175 11.1Q3.35 9.575 5.25 9.15Q5.875 6.85 7.75 5.425Q9.625 4 12 4Q14.925 4 16.962 6.037Q19 8.075 19 11Q20.725 11.2 21.863 12.487Q23 13.775 23 15.5Q23 17.375 21.688 18.688Q20.375 20 18.5 20Z"/>
    </Icon>
  );
});

IconMaterialCloudQueueRoundedFilled.displayName = 'AmauiIconMaterialCloudQueueRoundedFilled';

export default IconMaterialCloudQueueRoundedFilled;
