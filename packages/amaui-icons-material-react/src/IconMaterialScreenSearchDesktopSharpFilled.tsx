import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenSearchDesktopSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktopSharpFilled'
      short_name='ScreenSearchDesktop'

      {...props}
    >
      <path d="M15.45 15.05 16.55 14 14.45 11.9Q14.725 11.475 14.863 11Q15 10.525 15 10Q15 8.525 13.963 7.512Q12.925 6.5 11.5 6.5Q10.075 6.5 9.038 7.512Q8 8.525 8 10Q8 11.475 9.038 12.488Q10.075 13.5 11.5 13.5Q12.025 13.5 12.488 13.363Q12.95 13.225 13.4 12.95ZM11.5 12Q10.675 12 10.088 11.412Q9.5 10.825 9.5 10Q9.5 9.175 10.088 8.587Q10.675 8 11.5 8Q12.3 8 12.9 8.587Q13.5 9.175 13.5 10Q13.5 10.825 12.913 11.412Q12.325 12 11.5 12ZM2 18V3H22V18ZM1 21V19H23V21Z"/>
    </Icon>
  );
});

IconMaterialScreenSearchDesktopSharpFilled.displayName = 'AmauiIconMaterialScreenSearchDesktopSharpFilled';

export default IconMaterialScreenSearchDesktopSharpFilled;
