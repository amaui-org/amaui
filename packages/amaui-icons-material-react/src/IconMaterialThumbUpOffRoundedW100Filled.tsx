import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffRoundedW100Filled'
      short_name='ThumbUpOff'

      {...props}
    >
      <path d="M3.675 19.7Q2.775 19.7 2.138 19.062Q1.5 18.425 1.5 17.55V12Q1.5 11.1 2.138 10.462Q2.775 9.825 3.675 9.825Q4.575 9.825 5.213 10.462Q5.85 11.1 5.85 11.975V17.525Q5.85 18.425 5.213 19.062Q4.575 19.7 3.675 19.7ZM9.85 19.7Q9.225 19.7 8.787 19.262Q8.35 18.825 8.35 18.2V9.925Q8.35 9.625 8.463 9.35Q8.575 9.075 8.8 8.85L13.925 3.825Q14.1 3.65 14.325 3.6Q14.55 3.55 14.75 3.7Q14.9 3.825 14.925 4Q14.95 4.175 14.9 4.375L13.9 9.3H21Q21.575 9.3 22.038 9.762Q22.5 10.225 22.5 10.8V11.8Q22.5 11.925 22.475 12.075Q22.45 12.225 22.4 12.35L19.725 18.65Q19.5 19.15 19.113 19.425Q18.725 19.7 18.275 19.7Z"/>
    </Icon>
  );
});

IconMaterialThumbUpOffRoundedW100Filled.displayName = 'AmauiIconMaterialThumbUpOffRoundedW100Filled';

export default IconMaterialThumbUpOffRoundedW100Filled;
