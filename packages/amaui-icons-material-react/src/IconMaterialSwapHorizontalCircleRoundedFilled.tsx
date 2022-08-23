import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwapHorizontalCircleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizontalCircleRoundedFilled'
      short_name='SwapHorizontalCircle'

      {...props}
    >
      <path d="M15.7 13.3 18.3 10.7Q18.575 10.425 18.575 10Q18.575 9.575 18.3 9.3L15.675 6.675Q15.4 6.4 15 6.4Q14.6 6.4 14.3 6.7Q14.025 6.975 14.012 7.4Q14 7.825 14.3 8.1L15.15 9H11.975Q11.55 9 11.275 9.287Q11 9.575 11 10Q11 10.425 11.288 10.712Q11.575 11 12 11H15.15L14.275 11.9Q14 12.2 14 12.6Q14 13 14.3 13.3Q14.575 13.575 15 13.575Q15.425 13.575 15.7 13.3ZM8.325 17.325Q8.6 17.6 9 17.6Q9.4 17.6 9.7 17.3Q9.975 17.025 9.988 16.6Q10 16.175 9.7 15.9L8.85 15H12.025Q12.45 15 12.725 14.712Q13 14.425 13 14Q13 13.575 12.713 13.287Q12.425 13 12 13H8.85L9.725 12.1Q10 11.8 10 11.4Q10 11 9.7 10.7Q9.425 10.425 9 10.425Q8.575 10.425 8.3 10.7L5.7 13.3Q5.425 13.575 5.425 14Q5.425 14.425 5.7 14.7ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizontalCircleRoundedFilled.displayName = 'AmauiIconMaterialSwapHorizontalCircleRoundedFilled';

export default IconMaterialSwapHorizontalCircleRoundedFilled;
