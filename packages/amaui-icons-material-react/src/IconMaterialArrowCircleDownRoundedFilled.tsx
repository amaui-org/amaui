import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleDownRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleDownRoundedFilled'
      short_name='ArrowCircleDown'

      {...props}
    >
      <path d="M12 15.575Q12.2 15.575 12.375 15.512Q12.55 15.45 12.7 15.3L15.3 12.7Q15.575 12.425 15.575 12Q15.575 11.575 15.3 11.3Q15.025 11.025 14.6 11.025Q14.175 11.025 13.9 11.3L13 12.2V9Q13 8.575 12.713 8.287Q12.425 8 12 8Q11.575 8 11.288 8.287Q11 8.575 11 9V12.2L10.1 11.3Q9.825 11.025 9.4 11.025Q8.975 11.025 8.7 11.3Q8.425 11.575 8.425 12Q8.425 12.425 8.7 12.7L11.3 15.3Q11.45 15.45 11.625 15.512Q11.8 15.575 12 15.575ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleDownRoundedFilled.displayName = 'AmauiIconMaterialArrowCircleDownRoundedFilled';

export default IconMaterialArrowCircleDownRoundedFilled;
