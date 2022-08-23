import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewSidebarRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewSidebarRoundedW100Filled'
      short_name='ViewSidebar'

      {...props}
    >
      <path d="M17.45 9.3Q17.125 9.3 16.913 9.087Q16.7 8.875 16.7 8.55V6.05Q16.7 5.725 16.913 5.512Q17.125 5.3 17.45 5.3H19.95Q20.275 5.3 20.488 5.512Q20.7 5.725 20.7 6.05V8.55Q20.7 8.875 20.488 9.087Q20.275 9.3 19.95 9.3ZM17.45 14Q17.125 14 16.913 13.787Q16.7 13.575 16.7 13.25V10.75Q16.7 10.425 16.913 10.212Q17.125 10 17.45 10H19.95Q20.275 10 20.488 10.212Q20.7 10.425 20.7 10.75V13.25Q20.7 13.575 20.488 13.787Q20.275 14 19.95 14ZM4.05 18.7Q3.725 18.7 3.513 18.487Q3.3 18.275 3.3 17.95V6.05Q3.3 5.725 3.513 5.512Q3.725 5.3 4.05 5.3H15.25Q15.575 5.3 15.788 5.512Q16 5.725 16 6.05V17.95Q16 18.275 15.788 18.487Q15.575 18.7 15.25 18.7ZM17.45 18.7Q17.125 18.7 16.913 18.487Q16.7 18.275 16.7 17.95V15.45Q16.7 15.125 16.913 14.912Q17.125 14.7 17.45 14.7H19.95Q20.275 14.7 20.488 14.912Q20.7 15.125 20.7 15.45V17.95Q20.7 18.275 20.488 18.487Q20.275 18.7 19.95 18.7Z"/>
    </Icon>
  );
});

IconMaterialViewSidebarRoundedW100Filled.displayName = 'AmauiIconMaterialViewSidebarRoundedW100Filled';

export default IconMaterialViewSidebarRoundedW100Filled;
