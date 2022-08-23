import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInterestsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterestsSharpW100Filled'
      short_name='Interests'

      {...props}
    >
      <path d="M3 10.25 7.05 3.275 11.1 10.25ZM7.075 20.375Q5.65 20.375 4.675 19.4Q3.7 18.425 3.7 17Q3.7 15.575 4.675 14.6Q5.65 13.625 7.075 13.625Q8.5 13.625 9.475 14.6Q10.45 15.575 10.45 17Q10.45 18.425 9.475 19.4Q8.5 20.375 7.075 20.375ZM13.675 20.375V13.625H20.425V20.375ZM17.05 10.25Q16.275 9.65 15.563 9.075Q14.85 8.5 14.3 7.912Q13.75 7.325 13.425 6.725Q13.1 6.125 13.1 5.475Q13.1 4.65 13.625 4.125Q14.15 3.6 14.975 3.6Q15.55 3.6 16.05 3.887Q16.55 4.175 17.05 4.775Q17.55 4.2 18.075 3.9Q18.6 3.6 19.15 3.6Q19.95 3.6 20.475 4.162Q21 4.725 21 5.55Q21 6.175 20.675 6.762Q20.35 7.35 19.8 7.925Q19.25 8.5 18.538 9.075Q17.825 9.65 17.05 10.25Z"/>
    </Icon>
  );
});

IconMaterialInterestsSharpW100Filled.displayName = 'AmauiIconMaterialInterestsSharpW100Filled';

export default IconMaterialInterestsSharpW100Filled;
