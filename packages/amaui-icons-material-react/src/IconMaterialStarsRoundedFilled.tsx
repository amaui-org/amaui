import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarsRoundedFilled'
      short_name='Stars'

      {...props}
    >
      <path d="M12 14.95 14.775 17.05Q15.075 17.275 15.375 17.075Q15.675 16.875 15.55 16.525L14.5 13.05L17.225 11.1Q17.525 10.9 17.413 10.55Q17.3 10.2 16.925 10.2H13.6L12.475 6.55Q12.35 6.2 12 6.2Q11.65 6.2 11.525 6.55L10.4 10.2H7.075Q6.7 10.2 6.588 10.55Q6.475 10.9 6.775 11.1L9.5 13.05L8.45 16.525Q8.325 16.875 8.625 17.075Q8.925 17.275 9.225 17.05ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialStarsRoundedFilled.displayName = 'AmauiIconMaterialStarsRoundedFilled';

export default IconMaterialStarsRoundedFilled;
