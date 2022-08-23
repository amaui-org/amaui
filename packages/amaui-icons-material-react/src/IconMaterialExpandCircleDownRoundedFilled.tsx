import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandCircleDownRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleDownRoundedFilled'
      short_name='ExpandCircleDown'

      {...props}
    >
      <path d="M11.3 14.8Q11.575 15.075 12 15.075Q12.425 15.075 12.7 14.8L15.8 11.7Q16.075 11.425 16.075 11.012Q16.075 10.6 15.775 10.3Q15.5 10.025 15.075 10.025Q14.65 10.025 14.375 10.3L12 12.675L9.6 10.275Q9.325 10 8.913 10Q8.5 10 8.2 10.3Q7.925 10.575 7.925 11Q7.925 11.425 8.2 11.7ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleDownRoundedFilled.displayName = 'AmauiIconMaterialExpandCircleDownRoundedFilled';

export default IconMaterialExpandCircleDownRoundedFilled;
