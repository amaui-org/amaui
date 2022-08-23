import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimelapseSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimelapseSharpFilled'
      short_name='Timelapse'

      {...props}
    >
      <path d="M7.75 16.25Q8.625 17.075 9.713 17.538Q10.8 18 12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6V12ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialTimelapseSharpFilled.displayName = 'AmauiIconMaterialTimelapseSharpFilled';

export default IconMaterialTimelapseSharpFilled;
