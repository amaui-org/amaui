import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSportsSoccerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsSoccerRoundedFilled'
      short_name='SportsSoccer'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM17 9.5 18.35 9.05 18.75 7.7Q17.95 6.5 16.825 5.637Q15.7 4.775 14.35 4.35L13 5.3V6.7ZM7 9.5 11 6.7V5.3L9.65 4.35Q8.3 4.775 7.175 5.637Q6.05 6.5 5.25 7.7L5.65 9.05ZM5.95 17.2 7.1 17.1 7.85 15.75 6.4 11.4 5 10.9 4 11.65Q4 13.275 4.45 14.612Q4.9 15.95 5.95 17.2ZM12 20Q12.65 20 13.275 19.9Q13.9 19.8 14.5 19.6L15.2 18.1L14.55 17H9.45L8.8 18.1L9.5 19.6Q10.1 19.8 10.725 19.9Q11.35 20 12 20ZM9.75 15H14.25L15.65 11L12 8.45L8.4 11ZM18.05 17.2Q19.1 15.95 19.55 14.612Q20 13.275 20 11.65L19 10.95L17.6 11.4L16.15 15.75L16.9 17.1Z"/>
    </Icon>
  );
});

IconMaterialSportsSoccerRoundedFilled.displayName = 'AmauiIconMaterialSportsSoccerRoundedFilled';

export default IconMaterialSportsSoccerRoundedFilled;
