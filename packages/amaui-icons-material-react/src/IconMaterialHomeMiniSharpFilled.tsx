import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMiniSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniSharpFilled'
      short_name='HomeMini'

      {...props}
    >
      <path d="M12 5Q14.925 5 16.85 5.737Q18.775 6.475 19.925 7.562Q21.075 8.65 21.538 9.85Q22 11.05 22 12H2Q2 11.05 2.463 9.85Q2.925 8.65 4.075 7.562Q5.225 6.475 7.15 5.737Q9.075 5 12 5ZM9 19Q6.625 19 4.787 17.587Q2.95 16.175 2.3 14H21.7Q21.05 16.175 19.212 17.587Q17.375 19 15 19Z"/>
    </Icon>
  );
});

IconMaterialHomeMiniSharpFilled.displayName = 'AmauiIconMaterialHomeMiniSharpFilled';

export default IconMaterialHomeMiniSharpFilled;
