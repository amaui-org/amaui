import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatureRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureRoundedW100Filled'
      short_name='Nature'

      {...props}
    >
      <path d="M6.65 20.85Q6.5 20.85 6.4 20.75Q6.3 20.65 6.3 20.5Q6.3 20.35 6.4 20.25Q6.5 20.15 6.65 20.15H11.65V15.2H9Q7.45 15.2 6.375 14.125Q5.3 13.05 5.3 11.5Q5.3 10.225 6.175 9.275Q7.05 8.325 8.25 7.8Q8.45 5.8 9.45 4.8Q10.45 3.8 12 3.8Q13.55 3.8 14.55 4.8Q15.55 5.8 15.75 7.8Q16.975 8.275 17.837 9.25Q18.7 10.225 18.7 11.5Q18.7 13.05 17.625 14.125Q16.55 15.2 15 15.2H12.35V20.15H17.35Q17.5 20.15 17.6 20.25Q17.7 20.35 17.7 20.5Q17.7 20.65 17.6 20.75Q17.5 20.85 17.35 20.85Z"/>
    </Icon>
  );
});

IconMaterialNatureRoundedW100Filled.displayName = 'AmauiIconMaterialNatureRoundedW100Filled';

export default IconMaterialNatureRoundedW100Filled;
