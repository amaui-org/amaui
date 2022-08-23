import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbShadeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeRoundedW100'
      short_name='WbShade'

      {...props}
    >
      <path d="M19.025 18.85 14.075 13.9Q13.95 13.775 13.95 13.65Q13.95 13.525 14.075 13.4Q14.2 13.275 14.338 13.287Q14.475 13.3 14.575 13.4L19.525 18.35Q19.65 18.475 19.65 18.6Q19.65 18.725 19.525 18.85Q19.4 18.975 19.275 18.975Q19.15 18.975 19.025 18.85ZM14.675 19Q14.35 19 14.138 18.788Q13.925 18.575 13.925 18.25V17L15.925 19ZM5.675 19Q5.35 19 5.138 18.788Q4.925 18.575 4.925 18.25V9.5H4.8Q4.525 9.5 4.412 9.262Q4.3 9.025 4.5 8.825L7.65 5.675Q7.7 5.625 7.925 5.575Q7.95 5.575 8.2 5.675L11.35 8.825Q11.55 9.025 11.438 9.262Q11.325 9.5 11.05 9.5H10.925V18.25Q10.925 18.575 10.713 18.788Q10.5 19 10.175 19ZM6.225 14.7H9.625V9.5H6.225Z"/>
    </Icon>
  );
});

IconMaterialWbShadeRoundedW100.displayName = 'AmauiIconMaterialWbShadeRoundedW100';

export default IconMaterialWbShadeRoundedW100;
