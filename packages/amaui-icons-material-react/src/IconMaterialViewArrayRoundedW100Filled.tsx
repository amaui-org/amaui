import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewArrayRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayRoundedW100Filled'
      short_name='ViewArray'

      {...props}
    >
      <path d="M18.75 17.7Q18.425 17.7 18.212 17.487Q18 17.275 18 16.95V7.05Q18 6.725 18.212 6.512Q18.425 6.3 18.75 6.3H18.95Q19.275 6.3 19.488 6.512Q19.7 6.725 19.7 7.05V16.95Q19.7 17.275 19.488 17.487Q19.275 17.7 18.95 17.7ZM9.05 17.7Q8.725 17.7 8.512 17.487Q8.3 17.275 8.3 16.95V7.05Q8.3 6.725 8.512 6.512Q8.725 6.3 9.05 6.3H14.95Q15.275 6.3 15.488 6.512Q15.7 6.725 15.7 7.05V16.95Q15.7 17.275 15.488 17.487Q15.275 17.7 14.95 17.7ZM5.05 17.7Q4.725 17.7 4.513 17.487Q4.3 17.275 4.3 16.95V7.05Q4.3 6.725 4.513 6.512Q4.725 6.3 5.05 6.3H5.25Q5.575 6.3 5.787 6.512Q6 6.725 6 7.05V16.95Q6 17.275 5.787 17.487Q5.575 17.7 5.25 17.7Z"/>
    </Icon>
  );
});

IconMaterialViewArrayRoundedW100Filled.displayName = 'AmauiIconMaterialViewArrayRoundedW100Filled';

export default IconMaterialViewArrayRoundedW100Filled;
