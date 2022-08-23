import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEcoRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcoRoundedW100Filled'
      short_name='Eco'

      {...props}
    >
      <path d="M11.25 20.7Q10.25 20.7 9.288 20.425Q8.325 20.15 7.45 19.6Q8.05 17.375 9.25 15.438Q10.45 13.5 12.2 12Q10.2 13.225 8.725 15.025Q7.25 16.825 6.75 19.1Q6.625 19 6.525 18.913Q6.425 18.825 6.3 18.7Q5.35 17.7 4.825 16.475Q4.3 15.25 4.3 13.95Q4.3 12.5 4.863 11.188Q5.425 9.875 6.45 8.85Q8.15 7.15 10.775 6.637Q13.4 6.125 18.65 6.4Q19 11.45 18.462 14.137Q17.925 16.825 16.2 18.55Q15.2 19.6 13.913 20.15Q12.625 20.7 11.25 20.7Z"/>
    </Icon>
  );
});

IconMaterialEcoRoundedW100Filled.displayName = 'AmauiIconMaterialEcoRoundedW100Filled';

export default IconMaterialEcoRoundedW100Filled;
