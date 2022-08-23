import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness2SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2SharpFilled'
      short_name='Brightness2'

      {...props}
    >
      <path d="M9.5 2Q11.575 2 13.4 2.787Q15.225 3.575 16.575 4.925Q17.925 6.275 18.712 8.1Q19.5 9.925 19.5 12Q19.5 14.075 18.712 15.9Q17.925 17.725 16.575 19.075Q15.225 20.425 13.4 21.212Q11.575 22 9.5 22Q8.175 22 6.913 21.663Q5.65 21.325 4.5 20.65Q6.825 19.3 8.162 17Q9.5 14.7 9.5 12Q9.5 9.3 8.162 7Q6.825 4.7 4.5 3.35Q5.65 2.675 6.913 2.337Q8.175 2 9.5 2Z"/>
    </Icon>
  );
});

IconMaterialBrightness2SharpFilled.displayName = 'AmauiIconMaterialBrightness2SharpFilled';

export default IconMaterialBrightness2SharpFilled;
