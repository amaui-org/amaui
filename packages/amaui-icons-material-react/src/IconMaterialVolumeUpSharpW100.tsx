import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeUpSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpSharpW100'
      short_name='VolumeUp'

      {...props}
    >
      <path d="M14.1 19.125V18.375Q16.125 17.625 17.363 15.875Q18.6 14.125 18.6 11.975Q18.6 9.825 17.363 8.075Q16.125 6.325 14.1 5.575V4.825Q16.4 5.65 17.85 7.6Q19.3 9.55 19.3 11.975Q19.3 14.4 17.85 16.35Q16.4 18.3 14.1 19.125ZM4.7 13.7V10.3H7.95L11.1 7.15V16.85L7.95 13.7ZM14.1 15.1V8.85Q14.825 9.375 15.213 10.212Q15.6 11.05 15.6 12Q15.6 12.95 15.213 13.762Q14.825 14.575 14.1 15.1ZM10.4 8.85 8.25 11H5.4V13H8.25L10.4 15.15ZM7.9 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpSharpW100.displayName = 'AmauiIconMaterialVolumeUpSharpW100';

export default IconMaterialVolumeUpSharpW100;
