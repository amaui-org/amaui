import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestCamIqRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamIqRounded'
      short_name='NestCamIq'

      {...props}
    >
      <path d="M9 22Q8.175 22 7.588 21.413Q7 20.825 7 20H11V15.925Q8.425 15.55 6.713 13.6Q5 11.65 5 9Q5 6.075 7.038 4.037Q9.075 2 12 2Q14.925 2 16.962 4.037Q19 6.075 19 9Q19 11.65 17.288 13.6Q15.575 15.55 13 15.925V20H17Q17 20.825 16.413 21.413Q15.825 22 15 22ZM12 14Q14.075 14 15.538 12.537Q17 11.075 17 9Q17 6.925 15.538 5.463Q14.075 4 12 4Q9.925 4 8.463 5.463Q7 6.925 7 9Q7 11.075 8.463 12.537Q9.925 14 12 14ZM12 11Q11.175 11 10.588 10.412Q10 9.825 10 9Q10 8.175 10.588 7.587Q11.175 7 12 7Q12.825 7 13.413 7.587Q14 8.175 14 9Q14 9.825 13.413 10.412Q12.825 11 12 11Z"/>
    </Icon>
  );
});

IconMaterialNestCamIqRounded.displayName = 'AmauiIconMaterialNestCamIqRounded';

export default IconMaterialNestCamIqRounded;
