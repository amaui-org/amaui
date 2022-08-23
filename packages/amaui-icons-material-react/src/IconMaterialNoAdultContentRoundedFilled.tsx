import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoAdultContentRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoAdultContentRoundedFilled'
      short_name='NoAdultContent'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 20Q13.4 20 14.637 19.562Q15.875 19.125 16.9 18.325L13.575 15H16.4L18.3 16.9Q19.1 15.875 19.55 14.637Q20 13.4 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q10.6 4 9.363 4.45Q8.125 4.9 7.1 5.7L10.425 9H7.6L5.7 7.1Q4.9 8.125 4.45 9.363Q4 10.6 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20ZM9.75 14 11.25 12 9.75 10H11.25L12 11L12.75 10H14.25L12.75 12L14.25 14H12.75L12 13L11.25 14ZM5 14 6.5 12 5 10H6.5L7.25 11L8 10H9.5L8 12L9.5 14H8L7.25 13L6.5 14ZM14.5 14 16 12 14.5 10H16L16.75 11L17.5 10H19L17.5 12L19 14H17.5L16.75 13L16 14Z"/>
    </Icon>
  );
});

IconMaterialNoAdultContentRoundedFilled.displayName = 'AmauiIconMaterialNoAdultContentRoundedFilled';

export default IconMaterialNoAdultContentRoundedFilled;
