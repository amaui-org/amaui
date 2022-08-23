import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCleanHandsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleanHandsSharpW100Filled'
      short_name='CleanHands'

      {...props}
    >
      <path d="M17 8.8 16.425 7.55 15.2 7 16.425 6.425 17 5.2 17.575 6.425 18.8 7 17.575 7.55ZM20 13.35Q19.425 13.35 19.038 12.962Q18.65 12.575 18.65 12Q18.65 11.6 18.925 10.962Q19.2 10.325 20 9.15Q20.8 10.3 21.075 10.938Q21.35 11.575 21.35 12Q21.35 12.575 20.963 12.962Q20.575 13.35 20 13.35ZM2.35 19.6V12.3H5.05V19.6ZM13.55 20.65 5.75 18.35V12.3H8.25L15.4 14.925V16.4H12.7L9.85 15.4L9.55 16.1L12.65 17.1H20.25V18.55ZM14.35 12.4 8.825 10.3H5.7Q5.95 8.9 6.938 7.875Q7.925 6.85 9.65 6.65V3.35H8.15V2.65H13Q13.525 2.65 14.025 2.775Q14.525 2.9 14.95 3.125L14.425 3.65Q14.1 3.5 13.75 3.425Q13.4 3.35 13 3.35H10.35V6.65Q12.225 6.85 13.288 8.137Q14.35 9.425 14.35 11Z"/>
    </Icon>
  );
});

IconMaterialCleanHandsSharpW100Filled.displayName = 'AmauiIconMaterialCleanHandsSharpW100Filled';

export default IconMaterialCleanHandsSharpW100Filled;
