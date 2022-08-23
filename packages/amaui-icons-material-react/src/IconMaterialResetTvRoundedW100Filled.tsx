import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialResetTvRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvRoundedW100Filled'
      short_name='ResetTv'

      {...props}
    >
      <path d="M10.05 19.7Q9.725 19.7 9.513 19.487Q9.3 19.275 9.3 18.95V17.7H4.8Q4.175 17.7 3.737 17.262Q3.3 16.825 3.3 16.2V5.8Q3.3 5.175 3.737 4.737Q4.175 4.3 4.8 4.3H19.2Q19.825 4.3 20.263 4.737Q20.7 5.175 20.7 5.8V10.65H11.25L13.5 8.4Q13.6 8.3 13.613 8.162Q13.625 8.025 13.5 7.9Q13.375 7.775 13.25 7.775Q13.125 7.775 13 7.9L10.425 10.475Q10.3 10.6 10.25 10.725Q10.2 10.85 10.2 11Q10.2 11.15 10.25 11.275Q10.3 11.4 10.425 11.525L13 14.1Q13.1 14.2 13.238 14.212Q13.375 14.225 13.5 14.1Q13.625 13.975 13.625 13.85Q13.625 13.725 13.5 13.6L11.25 11.35H20.7V16.2Q20.7 16.825 20.263 17.262Q19.825 17.7 19.2 17.7H14.7V18.95Q14.7 19.275 14.488 19.487Q14.275 19.7 13.95 19.7Z"/>
    </Icon>
  );
});

IconMaterialResetTvRoundedW100Filled.displayName = 'AmauiIconMaterialResetTvRoundedW100Filled';

export default IconMaterialResetTvRoundedW100Filled;
