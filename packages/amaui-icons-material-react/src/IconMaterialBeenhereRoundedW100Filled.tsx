import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBeenhereRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereRoundedW100Filled'
      short_name='Beenhere'

      {...props}
    >
      <path d="M12 21.225Q11.875 21.225 11.775 21.188Q11.675 21.15 11.575 21.075L5.6 16.6Q5.45 16.5 5.375 16.337Q5.3 16.175 5.3 16V4.8Q5.3 4.175 5.738 3.737Q6.175 3.3 6.8 3.3H17.2Q17.825 3.3 18.262 3.737Q18.7 4.175 18.7 4.8V16Q18.7 16.175 18.625 16.337Q18.55 16.5 18.4 16.6L12.425 21.075Q12.325 21.15 12.225 21.188Q12.125 21.225 12 21.225ZM10.95 13.8Q11.1 13.8 11.225 13.75Q11.35 13.7 11.475 13.575L15.45 9.6Q15.55 9.5 15.562 9.363Q15.575 9.225 15.45 9.1Q15.325 8.975 15.2 8.975Q15.075 8.975 14.95 9.1L10.95 13.1L9.05 11.2Q9 11.15 8.938 11.125Q8.875 11.1 8.812 11.1Q8.75 11.1 8.675 11.125Q8.6 11.15 8.55 11.2Q8.425 11.325 8.425 11.45Q8.425 11.575 8.55 11.7L10.425 13.575Q10.55 13.7 10.675 13.75Q10.8 13.8 10.95 13.8Z"/>
    </Icon>
  );
});

IconMaterialBeenhereRoundedW100Filled.displayName = 'AmauiIconMaterialBeenhereRoundedW100Filled';

export default IconMaterialBeenhereRoundedW100Filled;
