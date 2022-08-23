import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeRoundedW100Filled'
      short_name='Code'

      {...props}
    >
      <path d="M16.225 16.875Q16.125 16.975 15.988 16.962Q15.85 16.95 15.75 16.85Q15.625 16.725 15.625 16.6Q15.625 16.475 15.75 16.35L20.1 12L15.725 7.625Q15.625 7.525 15.637 7.387Q15.65 7.25 15.75 7.15Q15.875 7.025 16 7.025Q16.125 7.025 16.25 7.15L20.575 11.475Q20.8 11.7 20.8 12Q20.8 12.3 20.575 12.525ZM7.75 16.85 3.425 12.525Q3.2 12.3 3.2 12Q3.2 11.7 3.425 11.475L7.775 7.125Q7.875 7.025 8.012 7.037Q8.15 7.05 8.25 7.15Q8.375 7.275 8.375 7.4Q8.375 7.525 8.25 7.65L3.9 12L8.275 16.375Q8.375 16.475 8.363 16.613Q8.35 16.75 8.25 16.85Q8.125 16.975 8 16.975Q7.875 16.975 7.75 16.85Z"/>
    </Icon>
  );
});

IconMaterialCodeRoundedW100Filled.displayName = 'AmauiIconMaterialCodeRoundedW100Filled';

export default IconMaterialCodeRoundedW100Filled;
