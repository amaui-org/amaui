import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCribRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribRoundedW100Filled'
      short_name='Crib'

      {...props}
    >
      <path d="M12 18.9Q12.7 18.9 13.35 18.8Q14 18.7 14.65 18.5V14.7H9.35V18.5Q10 18.7 10.65 18.8Q11.3 18.9 12 18.9ZM12 19.6Q10.4 19.6 8.913 19.062Q7.425 18.525 6.175 17.55Q6.05 17.45 6.038 17.3Q6.025 17.15 6.15 17.025Q6.25 16.925 6.375 16.925Q6.5 16.925 6.6 17Q7.075 17.375 7.588 17.688Q8.1 18 8.65 18.225V14.7H6.8Q6.15 14.7 5.725 14.275Q5.3 13.85 5.3 13.2V8Q5.3 6.875 6.088 6.088Q6.875 5.3 8 5.3H9.45Q10.075 5.3 10.513 5.738Q10.95 6.175 10.95 6.8V9.8H17.2Q17.85 9.8 18.275 10.225Q18.7 10.65 18.7 11.3V13.2Q18.7 13.85 18.275 14.275Q17.85 14.7 17.2 14.7H15.35V18.225Q15.9 18 16.413 17.688Q16.925 17.375 17.4 17Q17.5 16.925 17.625 16.925Q17.75 16.925 17.85 17.025Q17.975 17.15 17.962 17.3Q17.95 17.45 17.825 17.55Q16.575 18.525 15.088 19.062Q13.6 19.6 12 19.6Z"/>
    </Icon>
  );
});

IconMaterialCribRoundedW100Filled.displayName = 'AmauiIconMaterialCribRoundedW100Filled';

export default IconMaterialCribRoundedW100Filled;
