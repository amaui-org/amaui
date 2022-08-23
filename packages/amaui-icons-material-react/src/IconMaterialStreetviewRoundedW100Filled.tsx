import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStreetviewRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreetviewRoundedW100Filled'
      short_name='Streetview'

      {...props}
    >
      <path d="M17 11Q15.35 11 14.175 9.825Q13 8.65 13 7Q13 5.35 14.175 4.175Q15.35 3 17 3Q18.65 3 19.825 4.175Q21 5.35 21 7Q21 8.65 19.825 9.825Q18.65 11 17 11ZM5.5 18.5Q5.275 18.275 5.138 17.987Q5 17.7 5 17.4V6.2Q5 5.55 5.475 5.075Q5.95 4.6 6.6 4.6H12Q11.7 5.125 11.55 5.737Q11.4 6.35 11.4 7Q11.4 8.175 11.85 9.188Q12.3 10.2 13.05 10.95ZM12.2 19V14.65Q12.2 13.825 12.725 13.162Q13.25 12.5 14.05 12.3Q14.775 12.15 15.512 12.075Q16.25 12 17 12Q17.65 12 18.238 12.037Q18.825 12.075 19.4 12.2V17.4Q19.4 18.05 18.925 18.525Q18.45 19 17.8 19Z"/>
    </Icon>
  );
});

IconMaterialStreetviewRoundedW100Filled.displayName = 'AmauiIconMaterialStreetviewRoundedW100Filled';

export default IconMaterialStreetviewRoundedW100Filled;
