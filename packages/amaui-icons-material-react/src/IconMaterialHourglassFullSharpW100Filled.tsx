import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassFullSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassFullSharpW100Filled'
      short_name='HourglassFull'

      {...props}
    >
      <path d="M5.55 20.7V20H7.7V17Q7.7 15.2 8.738 13.787Q9.775 12.375 11.5 12Q9.775 11.625 8.738 10.212Q7.7 8.8 7.7 7V4H5.55V3.3H18.45V4H16.3V7Q16.3 8.8 15.263 10.212Q14.225 11.625 12.5 12Q14.225 12.375 15.263 13.787Q16.3 15.2 16.3 17V20H18.45V20.7Z"/>
    </Icon>
  );
});

IconMaterialHourglassFullSharpW100Filled.displayName = 'AmauiIconMaterialHourglassFullSharpW100Filled';

export default IconMaterialHourglassFullSharpW100Filled;
