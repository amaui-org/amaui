import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeOffSharpFilled'
      short_name='VolumeOff'

      {...props}
    >
      <path d="M19.8 22.6 16.775 19.575Q16.15 19.975 15.45 20.263Q14.75 20.55 14 20.725V18.675Q14.35 18.55 14.688 18.425Q15.025 18.3 15.325 18.125L12 14.8V20L7 15H3V9H6.2L1.4 4.2L2.8 2.8L21.2 21.2ZM19.6 16.8 18.15 15.35Q18.575 14.575 18.788 13.725Q19 12.875 19 11.975Q19 9.625 17.625 7.775Q16.25 5.925 14 5.275V3.225Q17.1 3.925 19.05 6.362Q21 8.8 21 11.975Q21 13.3 20.638 14.525Q20.275 15.75 19.6 16.8ZM16.25 13.45 14 11.2V7.95Q15.175 8.5 15.838 9.6Q16.5 10.7 16.5 12Q16.5 12.375 16.438 12.738Q16.375 13.1 16.25 13.45ZM12 9.2 9.4 6.6 12 4Z"/>
    </Icon>
  );
});

IconMaterialVolumeOffSharpFilled.displayName = 'AmauiIconMaterialVolumeOffSharpFilled';

export default IconMaterialVolumeOffSharpFilled;
