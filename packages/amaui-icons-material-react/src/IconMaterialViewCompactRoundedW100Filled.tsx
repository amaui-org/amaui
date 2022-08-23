import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCompactRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactRoundedW100Filled'
      short_name='ViewCompact'

      {...props}
    >
      <path d="M20.7 10.9Q20.7 11.225 20.488 11.438Q20.275 11.65 19.95 11.65H4.05Q3.725 11.65 3.513 11.438Q3.3 11.225 3.3 10.9V6.05Q3.3 5.725 3.513 5.512Q3.725 5.3 4.05 5.3H19.95Q20.275 5.3 20.488 5.512Q20.7 5.725 20.7 6.05ZM9.95 18.7Q9.625 18.7 9.413 18.487Q9.2 18.275 9.2 17.95V13.1Q9.2 12.775 9.413 12.562Q9.625 12.35 9.95 12.35H19.95Q20.275 12.35 20.488 12.562Q20.7 12.775 20.7 13.1V17.95Q20.7 18.275 20.488 18.487Q20.275 18.7 19.95 18.7ZM4.05 18.7Q3.725 18.7 3.513 18.487Q3.3 18.275 3.3 17.95V13.1Q3.3 12.775 3.513 12.562Q3.725 12.35 4.05 12.35H7.75Q8.075 12.35 8.288 12.562Q8.5 12.775 8.5 13.1V17.95Q8.5 18.275 8.288 18.487Q8.075 18.7 7.75 18.7Z"/>
    </Icon>
  );
});

IconMaterialViewCompactRoundedW100Filled.displayName = 'AmauiIconMaterialViewCompactRoundedW100Filled';

export default IconMaterialViewCompactRoundedW100Filled;
