import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttributionRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttributionRoundedFilled'
      short_name='Attribution'

      {...props}
    >
      <path d="M12 19Q12.525 19 12.887 18.637Q13.25 18.275 13.25 17.75V14.5H14.25Q14.45 14.5 14.6 14.35Q14.75 14.2 14.75 14V9.9Q14.75 9.225 14.038 8.863Q13.325 8.5 12 8.5Q10.675 8.5 9.963 8.863Q9.25 9.225 9.25 9.9V14Q9.25 14.2 9.4 14.35Q9.55 14.5 9.75 14.5H10.75V17.75Q10.75 18.275 11.113 18.637Q11.475 19 12 19ZM12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 9.925 2.788 8.113Q3.575 6.3 4.938 4.938Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22ZM12 8Q12.65 8 13.075 7.575Q13.5 7.15 13.5 6.5Q13.5 5.85 13.075 5.425Q12.65 5 12 5Q11.35 5 10.925 5.425Q10.5 5.85 10.5 6.5Q10.5 7.15 10.925 7.575Q11.35 8 12 8Z"/>
    </Icon>
  );
});

IconMaterialAttributionRoundedFilled.displayName = 'AmauiIconMaterialAttributionRoundedFilled';

export default IconMaterialAttributionRoundedFilled;
