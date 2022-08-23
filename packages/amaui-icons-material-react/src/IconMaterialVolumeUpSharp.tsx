import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeUpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpSharp'
      short_name='VolumeUp'

      {...props}
    >
      <path d="M14 20.725V18.675Q16.25 18.025 17.625 16.175Q19 14.325 19 11.975Q19 9.625 17.625 7.775Q16.25 5.925 14 5.275V3.225Q17.1 3.925 19.05 6.362Q21 8.8 21 11.975Q21 15.15 19.05 17.587Q17.1 20.025 14 20.725ZM3 15V9H7L12 4V20L7 15ZM14 16V7.95Q15.125 8.475 15.812 9.575Q16.5 10.675 16.5 12Q16.5 13.325 15.812 14.4Q15.125 15.475 14 16ZM10 8.85 7.85 11H5V13H7.85L10 15.15ZM7.5 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpSharp.displayName = 'AmauiIconMaterialVolumeUpSharp';

export default IconMaterialVolumeUpSharp;
