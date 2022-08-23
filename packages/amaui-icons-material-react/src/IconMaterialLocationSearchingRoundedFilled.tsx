import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationSearchingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearchingRoundedFilled'
      short_name='LocationSearching'

      {...props}
    >
      <path d="M12 22.95Q11.575 22.95 11.288 22.663Q11 22.375 11 21.95V20.95Q7.875 20.6 5.638 18.363Q3.4 16.125 3.05 13H2.05Q1.625 13 1.337 12.712Q1.05 12.425 1.05 12Q1.05 11.575 1.337 11.287Q1.625 11 2.05 11H3.05Q3.4 7.875 5.638 5.637Q7.875 3.4 11 3.05V2.05Q11 1.625 11.288 1.337Q11.575 1.05 12 1.05Q12.425 1.05 12.713 1.337Q13 1.625 13 2.05V3.05Q16.125 3.4 18.363 5.637Q20.6 7.875 20.95 11H21.95Q22.375 11 22.663 11.287Q22.95 11.575 22.95 12Q22.95 12.425 22.663 12.712Q22.375 13 21.95 13H20.95Q20.6 16.125 18.363 18.363Q16.125 20.6 13 20.95V21.95Q13 22.375 12.713 22.663Q12.425 22.95 12 22.95ZM12 19Q14.9 19 16.95 16.95Q19 14.9 19 12Q19 9.1 16.95 7.05Q14.9 5 12 5Q9.1 5 7.05 7.05Q5 9.1 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialLocationSearchingRoundedFilled.displayName = 'AmauiIconMaterialLocationSearchingRoundedFilled';

export default IconMaterialLocationSearchingRoundedFilled;
