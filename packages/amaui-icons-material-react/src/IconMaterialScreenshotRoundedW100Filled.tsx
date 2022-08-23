import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotRoundedW100Filled'
      short_name='Screenshot'

      {...props}
    >
      <path d="M8.85 10.05Q8.7 10.05 8.6 9.95Q8.5 9.85 8.5 9.7V7.425Q8.5 7.175 8.663 7.012Q8.825 6.85 9.075 6.85H11.35Q11.5 6.85 11.6 6.95Q11.7 7.05 11.7 7.2Q11.7 7.35 11.6 7.45Q11.5 7.55 11.35 7.55H9.2V9.7Q9.2 9.85 9.1 9.95Q9 10.05 8.85 10.05ZM12.65 17.15Q12.5 17.15 12.4 17.05Q12.3 16.95 12.3 16.8Q12.3 16.65 12.4 16.55Q12.5 16.45 12.65 16.45H14.8V14.3Q14.8 14.15 14.9 14.05Q15 13.95 15.15 13.95Q15.3 13.95 15.4 14.05Q15.5 14.15 15.5 14.3V16.575Q15.5 16.825 15.338 16.987Q15.175 17.15 14.925 17.15ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialScreenshotRoundedW100Filled.displayName = 'AmauiIconMaterialScreenshotRoundedW100Filled';

export default IconMaterialScreenshotRoundedW100Filled;
