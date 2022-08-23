import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMotionPhotosOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosOffRoundedFilled'
      short_name='MotionPhotosOff'

      {...props}
    >
      <path d="M19.1 21.9 17.525 20.35Q16.3 21.15 14.913 21.575Q13.525 22 12.025 22Q9.95 22 8.125 21.212Q6.3 20.425 4.95 19.075Q3.6 17.725 2.812 15.9Q2.025 14.075 2.025 12Q2.025 10.5 2.45 9.112Q2.875 7.725 3.675 6.5L2.1 4.925Q1.8 4.625 1.812 4.212Q1.825 3.8 2.1 3.525Q2.4 3.225 2.825 3.225Q3.25 3.225 3.525 3.525L20.525 20.5Q20.825 20.8 20.812 21.212Q20.8 21.625 20.525 21.9Q20.225 22.2 19.8 22.2Q19.375 22.2 19.1 21.9ZM20.375 17.5 6.525 3.65Q7.75 2.85 9.137 2.425Q10.525 2 12.025 2Q14.1 2 15.925 2.787Q17.75 3.575 19.1 4.925Q20.45 6.275 21.238 8.1Q22.025 9.925 22.025 12Q22.025 13.5 21.6 14.887Q21.175 16.275 20.375 17.5Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosOffRoundedFilled.displayName = 'AmauiIconMaterialMotionPhotosOffRoundedFilled';

export default IconMaterialMotionPhotosOffRoundedFilled;
