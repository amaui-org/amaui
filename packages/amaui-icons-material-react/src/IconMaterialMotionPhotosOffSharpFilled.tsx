import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMotionPhotosOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPhotosOffSharpFilled'
      short_name='MotionPhotosOff'

      {...props}
    >
      <path d="M19.775 22.625 17.5 20.35Q16.275 21.15 14.888 21.575Q13.5 22 12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 10.5 2.425 9.112Q2.85 7.725 3.65 6.5L1.375 4.225L2.8 2.8L21.2 21.2ZM20.35 17.5 6.5 3.65Q7.725 2.85 9.113 2.425Q10.5 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 13.5 21.575 14.887Q21.15 16.275 20.35 17.5Z"/>
    </Icon>
  );
});

IconMaterialMotionPhotosOffSharpFilled.displayName = 'AmauiIconMaterialMotionPhotosOffSharpFilled';

export default IconMaterialMotionPhotosOffSharpFilled;
