import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShareSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareSharpFilled'
      short_name='Share'

      {...props}
    >
      <path d="M18 22Q16.75 22 15.875 21.125Q15 20.25 15 19Q15 18.825 15.025 18.637Q15.05 18.45 15.1 18.3L8.05 14.2Q7.625 14.575 7.1 14.787Q6.575 15 6 15Q4.75 15 3.875 14.125Q3 13.25 3 12Q3 10.75 3.875 9.875Q4.75 9 6 9Q6.575 9 7.1 9.212Q7.625 9.425 8.05 9.8L15.1 5.7Q15.05 5.55 15.025 5.363Q15 5.175 15 5Q15 3.75 15.875 2.875Q16.75 2 18 2Q19.25 2 20.125 2.875Q21 3.75 21 5Q21 6.25 20.125 7.125Q19.25 8 18 8Q17.425 8 16.9 7.787Q16.375 7.575 15.95 7.2L8.9 11.3Q8.95 11.45 8.975 11.637Q9 11.825 9 12Q9 12.175 8.975 12.362Q8.95 12.55 8.9 12.7L15.95 16.8Q16.375 16.425 16.9 16.212Q17.425 16 18 16Q19.25 16 20.125 16.875Q21 17.75 21 19Q21 20.25 20.125 21.125Q19.25 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialShareSharpFilled.displayName = 'AmauiIconMaterialShareSharpFilled';

export default IconMaterialShareSharpFilled;
