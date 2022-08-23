import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness3Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3Sharp'
      short_name='Brightness3'

      {...props}
    >
      <path d="M12.675 19.1Q14.675 18.05 15.838 16.137Q17 14.225 17 12Q17 9.775 15.838 7.862Q14.675 5.95 12.675 4.9Q13.8 6.45 14.4 8.262Q15 10.075 15 12Q15 13.925 14.4 15.738Q13.8 17.55 12.675 19.1ZM9 22Q8.2 22 7.463 21.887Q6.725 21.775 6 21.55Q9.15 20.525 11.075 17.9Q13 15.275 13 12Q13 8.725 11.075 6.1Q9.15 3.475 6 2.45Q6.725 2.225 7.463 2.112Q8.2 2 9 2Q11.075 2 12.9 2.787Q14.725 3.575 16.075 4.925Q17.425 6.275 18.212 8.1Q19 9.925 19 12Q19 14.075 18.212 15.9Q17.425 17.725 16.075 19.075Q14.725 20.425 12.9 21.212Q11.075 22 9 22ZM15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Q15 12 15 12Z"/>
    </Icon>
  );
});

IconMaterialBrightness3Sharp.displayName = 'AmauiIconMaterialBrightness3Sharp';

export default IconMaterialBrightness3Sharp;
