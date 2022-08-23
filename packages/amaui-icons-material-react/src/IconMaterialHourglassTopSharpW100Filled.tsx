import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassTopSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassTopSharpW100Filled'
      short_name='HourglassTop'

      {...props}
    >
      <path d="M8.4 20H15.6V17Q15.6 15.3 14.6 14Q13.6 12.7 12 12.7Q10.4 12.7 9.4 14Q8.4 15.3 8.4 17ZM5.55 20.7V20H7.7V17Q7.7 15.2 8.738 13.787Q9.775 12.375 11.5 12Q9.775 11.625 8.738 10.212Q7.7 8.8 7.7 7V4H5.55V3.3H18.45V4H16.3V7Q16.3 8.8 15.263 10.212Q14.225 11.625 12.5 12Q14.225 12.375 15.263 13.787Q16.3 15.2 16.3 17V20H18.45V20.7Z"/>
    </Icon>
  );
});

IconMaterialHourglassTopSharpW100Filled.displayName = 'AmauiIconMaterialHourglassTopSharpW100Filled';

export default IconMaterialHourglassTopSharpW100Filled;
