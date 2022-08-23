import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeOffSharpW100Filled'
      short_name='VolumeOff'

      {...props}
    >
      <path d="M18.95 21.4 15.95 18.4Q15.6 18.625 15.225 18.8Q14.85 18.975 14.45 19.125V18.375Q14.725 18.275 14.975 18.163Q15.225 18.05 15.45 17.9L11.45 13.9V16.85L8.3 13.7H5.05V10.3H7.85L2.95 5.4L3.45 4.9L19.45 20.9ZM18 16.625 17.525 16.15Q18.2 15.275 18.575 14.212Q18.95 13.15 18.95 11.975Q18.95 9.825 17.712 8.075Q16.475 6.325 14.45 5.575V4.825Q16.775 5.65 18.213 7.6Q19.65 9.55 19.65 11.975Q19.65 13.275 19.213 14.462Q18.775 15.65 18 16.625ZM15.4 14.025 14.45 13.075V8.85Q15.2 9.4 15.575 10.237Q15.95 11.075 15.95 12Q15.95 12.55 15.812 13.062Q15.675 13.575 15.4 14.025ZM11.45 10.075 10 8.6 11.45 7.15Z"/>
    </Icon>
  );
});

IconMaterialVolumeOffSharpW100Filled.displayName = 'AmauiIconMaterialVolumeOffSharpW100Filled';

export default IconMaterialVolumeOffSharpW100Filled;
