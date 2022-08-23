import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness2RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2RoundedFilled'
      short_name='Brightness2'

      {...props}
    >
      <path d="M19.5 12Q19.5 14.075 18.712 15.9Q17.925 17.725 16.575 19.075Q15.225 20.425 13.4 21.212Q11.575 22 9.5 22Q8.7 22 7.825 21.85Q6.95 21.7 6.15 21.425Q5.85 21.3 5.675 21.038Q5.5 20.775 5.5 20.45Q5.5 20.225 5.588 20.025Q5.675 19.825 5.85 19.7Q7.625 18.225 8.562 16.212Q9.5 14.2 9.5 12Q9.5 9.8 8.562 7.787Q7.625 5.775 5.85 4.3Q5.675 4.175 5.588 3.975Q5.5 3.775 5.5 3.55Q5.5 3.225 5.675 2.962Q5.85 2.7 6.15 2.575Q6.95 2.3 7.825 2.15Q8.7 2 9.5 2Q11.575 2 13.4 2.787Q15.225 3.575 16.575 4.925Q17.925 6.275 18.712 8.1Q19.5 9.925 19.5 12Z"/>
    </Icon>
  );
});

IconMaterialBrightness2RoundedFilled.displayName = 'AmauiIconMaterialBrightness2RoundedFilled';

export default IconMaterialBrightness2RoundedFilled;
