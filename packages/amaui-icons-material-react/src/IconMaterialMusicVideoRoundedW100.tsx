import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicVideoRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoRoundedW100'
      short_name='MusicVideo'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4.8 18Q4.45 18 4.225 17.775Q4 17.55 4 17.2V6.8Q4 6.45 4.225 6.225Q4.45 6 4.8 6Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM4.8 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM10.975 16.425Q11.75 16.425 12.3 15.875Q12.85 15.325 12.85 14.55V9H14.65Q14.925 9 15.138 8.8Q15.35 8.6 15.35 8.3Q15.35 8.025 15.138 7.812Q14.925 7.6 14.65 7.6H12.9Q12.575 7.6 12.363 7.812Q12.15 8.025 12.15 8.35V13.1Q11.925 12.9 11.625 12.787Q11.325 12.675 10.975 12.675Q10.2 12.675 9.65 13.225Q9.1 13.775 9.1 14.55Q9.1 15.325 9.65 15.875Q10.2 16.425 10.975 16.425Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoRoundedW100.displayName = 'AmauiIconMaterialMusicVideoRoundedW100';

export default IconMaterialMusicVideoRoundedW100;
