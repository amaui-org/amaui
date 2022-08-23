import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuickreplyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyRounded'
      short_name='Quickreply'

      {...props}
    >
      <path d="M6 18 3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V10H20V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4V16H15V18ZM4 16V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16ZM19 18H18Q17.575 18 17.288 17.712Q17 17.425 17 17V13Q17 12.575 17.288 12.287Q17.575 12 18 12H20.5Q21.05 12 21.325 12.45Q21.6 12.9 21.4 13.4L20.3 16H21.275Q21.7 16 21.925 16.35Q22.15 16.7 21.95 17.075L19.95 21.1Q19.775 21.45 19.388 21.362Q19 21.275 19 20.875Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyRounded.displayName = 'AmauiIconMaterialQuickreplyRounded';

export default IconMaterialQuickreplyRounded;
