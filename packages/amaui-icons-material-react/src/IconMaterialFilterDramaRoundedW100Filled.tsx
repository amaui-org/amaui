import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterDramaRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterDramaRoundedW100Filled'
      short_name='FilterDrama'

      {...props}
    >
      <path d="M6.5 18.7Q4.75 18.7 3.525 17.475Q2.3 16.25 2.3 14.5Q2.3 12.775 3.525 11.537Q4.75 10.3 6.5 10.3Q8.15 10.3 9.35 11.412Q10.55 12.525 10.675 14.15Q10.7 14.3 10.812 14.4Q10.925 14.5 11.05 14.5Q11.2 14.5 11.3 14.387Q11.4 14.275 11.4 14.15Q11.275 12.2 9.938 10.925Q8.6 9.65 6.5 9.6Q6.925 7.675 8.488 6.488Q10.05 5.3 12 5.3Q14.375 5.3 16.038 6.963Q17.7 8.625 17.7 11V12.3H18.5Q19.85 12.3 20.775 13.225Q21.7 14.15 21.7 15.5Q21.7 16.825 20.763 17.762Q19.825 18.7 18.5 18.7Z"/>
    </Icon>
  );
});

IconMaterialFilterDramaRoundedW100Filled.displayName = 'AmauiIconMaterialFilterDramaRoundedW100Filled';

export default IconMaterialFilterDramaRoundedW100Filled;
