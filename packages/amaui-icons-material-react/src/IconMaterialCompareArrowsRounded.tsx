import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareArrowsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrowsRounded'
      short_name='CompareArrows'

      {...props}
    >
      <path d="M15.3 13.3 11.7 9.7Q11.55 9.55 11.488 9.375Q11.425 9.2 11.425 9Q11.425 8.8 11.488 8.625Q11.55 8.45 11.7 8.3L15.3 4.7Q15.6 4.4 16 4.4Q16.4 4.4 16.7 4.7Q17 5 17 5.412Q17 5.825 16.7 6.125L14.825 8H21Q21.425 8 21.712 8.287Q22 8.575 22 9Q22 9.425 21.712 9.712Q21.425 10 21 10H14.825L16.7 11.875Q17 12.175 17 12.575Q17 12.975 16.7 13.275Q16.4 13.575 16.013 13.6Q15.625 13.625 15.3 13.3ZM7.3 19.275Q7.6 19.575 8 19.587Q8.4 19.6 8.7 19.3L12.3 15.7Q12.45 15.55 12.513 15.375Q12.575 15.2 12.575 15Q12.575 14.8 12.513 14.625Q12.45 14.45 12.3 14.3L8.7 10.7Q8.4 10.4 8 10.4Q7.6 10.4 7.3 10.7Q7 11 7 11.412Q7 11.825 7.3 12.125L9.175 14H3Q2.575 14 2.288 14.287Q2 14.575 2 15Q2 15.425 2.288 15.712Q2.575 16 3 16H9.175L7.3 17.875Q7 18.175 7 18.575Q7 18.975 7.3 19.275Z"/>
    </Icon>
  );
});

IconMaterialCompareArrowsRounded.displayName = 'AmauiIconMaterialCompareArrowsRounded';

export default IconMaterialCompareArrowsRounded;
