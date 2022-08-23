import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRowsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsRoundedW100Filled'
      short_name='TableRows'

      {...props}
    >
      <path d="M19.7 8.125Q19.7 8.45 19.488 8.662Q19.275 8.875 18.95 8.875H5.05Q4.725 8.875 4.513 8.662Q4.3 8.45 4.3 8.125V5.05Q4.3 4.725 4.513 4.512Q4.725 4.3 5.05 4.3H18.95Q19.275 4.3 19.488 4.512Q19.7 4.725 19.7 5.05ZM19.7 13.675Q19.7 14 19.488 14.212Q19.275 14.425 18.95 14.425H5.05Q4.725 14.425 4.513 14.212Q4.3 14 4.3 13.675V10.325Q4.3 10 4.513 9.787Q4.725 9.575 5.05 9.575H18.95Q19.275 9.575 19.488 9.787Q19.7 10 19.7 10.325ZM19.7 18.95Q19.7 19.275 19.488 19.487Q19.275 19.7 18.95 19.7H5.05Q4.725 19.7 4.513 19.487Q4.3 19.275 4.3 18.95V15.875Q4.3 15.55 4.513 15.337Q4.725 15.125 5.05 15.125H18.95Q19.275 15.125 19.488 15.337Q19.7 15.55 19.7 15.875Z"/>
    </Icon>
  );
});

IconMaterialTableRowsRoundedW100Filled.displayName = 'AmauiIconMaterialTableRowsRoundedW100Filled';

export default IconMaterialTableRowsRoundedW100Filled;
