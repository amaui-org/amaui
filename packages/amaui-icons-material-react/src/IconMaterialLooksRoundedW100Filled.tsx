import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksRoundedW100Filled'
      short_name='Looks'

      {...props}
    >
      <path d="M6.65 17Q6.5 17 6.4 16.9Q6.3 16.8 6.3 16.65Q6.425 14.375 8.075 12.837Q9.725 11.3 12 11.3Q14.275 11.3 15.925 12.837Q17.575 14.375 17.7 16.65Q17.7 16.8 17.6 16.9Q17.5 17 17.35 17Q17.225 17 17.125 16.9Q17.025 16.8 17 16.65Q16.875 14.7 15.425 13.35Q13.975 12 12 12Q10.025 12 8.575 13.35Q7.125 14.7 7 16.65Q6.975 16.8 6.888 16.9Q6.8 17 6.65 17ZM2.65 17Q2.5 17 2.4 16.9Q2.3 16.8 2.3 16.65Q2.375 14.7 3.163 13Q3.95 11.3 5.263 10.025Q6.575 8.75 8.312 8.025Q10.05 7.3 12 7.3Q13.95 7.3 15.688 8.025Q17.425 8.75 18.738 10.025Q20.05 11.3 20.837 13Q21.625 14.7 21.7 16.65Q21.7 16.8 21.6 16.9Q21.5 17 21.35 17Q21.2 17 21.1 16.9Q21 16.8 21 16.65Q20.875 13.025 18.262 10.512Q15.65 8 12 8Q8.35 8 5.737 10.512Q3.125 13.025 3 16.65Q3 16.8 2.9 16.9Q2.8 17 2.65 17Z"/>
    </Icon>
  );
});

IconMaterialLooksRoundedW100Filled.displayName = 'AmauiIconMaterialLooksRoundedW100Filled';

export default IconMaterialLooksRoundedW100Filled;
