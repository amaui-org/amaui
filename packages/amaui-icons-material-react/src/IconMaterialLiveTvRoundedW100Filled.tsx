import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLiveTvRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveTvRoundedW100Filled'
      short_name='LiveTv'

      {...props}
    >
      <path d="M11.3 13.55 14.325 11.625Q14.5 11.5 14.575 11.35Q14.65 11.2 14.65 11Q14.65 10.8 14.575 10.65Q14.5 10.5 14.325 10.375L11.3 8.45Q10.925 8.2 10.538 8.412Q10.15 8.625 10.15 9.075V12.925Q10.15 13.375 10.538 13.587Q10.925 13.8 11.3 13.55ZM10.05 19.7Q9.725 19.7 9.513 19.487Q9.3 19.275 9.3 18.95V17.7H4.8Q4.175 17.7 3.737 17.262Q3.3 16.825 3.3 16.2V5.8Q3.3 5.175 3.737 4.737Q4.175 4.3 4.8 4.3H19.2Q19.825 4.3 20.263 4.737Q20.7 5.175 20.7 5.8V16.2Q20.7 16.825 20.263 17.262Q19.825 17.7 19.2 17.7H14.7V18.95Q14.7 19.275 14.488 19.487Q14.275 19.7 13.95 19.7Z"/>
    </Icon>
  );
});

IconMaterialLiveTvRoundedW100Filled.displayName = 'AmauiIconMaterialLiveTvRoundedW100Filled';

export default IconMaterialLiveTvRoundedW100Filled;
