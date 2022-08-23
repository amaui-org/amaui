import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpatialAudioSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioSharpFilled'
      short_name='SpatialAudio'

      {...props}
    >
      <path d="M23 10.025Q21.2 10.025 19.55 9.337Q17.9 8.65 16.625 7.375Q15.35 6.1 14.663 4.45Q13.975 2.8 13.975 1H15.975Q15.975 2.425 16.5 3.7Q17.025 4.975 18.025 5.975Q19.025 6.975 20.3 7.512Q21.575 8.05 23 8.05ZM23 6.05Q21.975 6.05 21.062 5.675Q20.15 5.3 19.425 4.575Q18.7 3.85 18.325 2.937Q17.95 2.025 17.95 1H19.925Q19.925 1.625 20.163 2.188Q20.4 2.75 20.825 3.175Q21.25 3.6 21.812 3.825Q22.375 4.05 23 4.05ZM10 13Q8.35 13 7.175 11.825Q6 10.65 6 9Q6 7.35 7.175 6.175Q8.35 5 10 5Q11.65 5 12.825 6.175Q14 7.35 14 9Q14 10.65 12.825 11.825Q11.65 13 10 13ZM2 21V18.2Q2 17.375 2.425 16.65Q2.85 15.925 3.6 15.55Q4.875 14.9 6.475 14.45Q8.075 14 10 14Q11.925 14 13.525 14.45Q15.125 14.9 16.4 15.55Q17.15 15.925 17.575 16.65Q18 17.375 18 18.2V21Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioSharpFilled.displayName = 'AmauiIconMaterialSpatialAudioSharpFilled';

export default IconMaterialSpatialAudioSharpFilled;
