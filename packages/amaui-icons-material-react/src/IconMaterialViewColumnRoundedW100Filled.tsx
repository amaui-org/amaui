import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnRoundedW100Filled'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M5.05 17.7Q4.725 17.7 4.513 17.487Q4.3 17.275 4.3 16.95V7.05Q4.3 6.725 4.513 6.512Q4.725 6.3 5.05 6.3H8.45Q8.775 6.3 8.988 6.512Q9.2 6.725 9.2 7.05V16.95Q9.2 17.275 8.988 17.487Q8.775 17.7 8.45 17.7ZM10.65 17.7Q10.325 17.7 10.113 17.487Q9.9 17.275 9.9 16.95V7.05Q9.9 6.725 10.113 6.512Q10.325 6.3 10.65 6.3H13.35Q13.675 6.3 13.888 6.512Q14.1 6.725 14.1 7.05V16.95Q14.1 17.275 13.888 17.487Q13.675 17.7 13.35 17.7ZM15.55 17.7Q15.225 17.7 15.013 17.487Q14.8 17.275 14.8 16.95V7.05Q14.8 6.725 15.013 6.512Q15.225 6.3 15.55 6.3H18.95Q19.275 6.3 19.488 6.512Q19.7 6.725 19.7 7.05V16.95Q19.7 17.275 19.488 17.487Q19.275 17.7 18.95 17.7Z"/>
    </Icon>
  );
});

IconMaterialViewColumnRoundedW100Filled.displayName = 'AmauiIconMaterialViewColumnRoundedW100Filled';

export default IconMaterialViewColumnRoundedW100Filled;
