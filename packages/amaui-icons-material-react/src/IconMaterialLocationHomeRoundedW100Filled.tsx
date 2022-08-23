import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationHomeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationHomeRoundedW100Filled'
      short_name='LocationHome'

      {...props}
    >
      <path d="M5.3 19.7V9.65L12 4.575L18.7 9.65V19.7ZM6 10V18.9Q7.3 17.775 8.713 17.212Q10.125 16.65 11.925 16.65Q13.65 16.65 15.213 17.237Q16.775 17.825 18 18.875V10L12 5.45ZM12 14.35Q11.025 14.35 10.338 13.662Q9.65 12.975 9.65 12Q9.65 11.025 10.338 10.337Q11.025 9.65 12 9.65Q12.975 9.65 13.663 10.337Q14.35 11.025 14.35 12Q14.35 12.975 13.663 13.662Q12.975 14.35 12 14.35ZM12 13.65Q12.675 13.65 13.163 13.162Q13.65 12.675 13.65 12Q13.65 11.325 13.163 10.837Q12.675 10.35 12 10.35Q11.325 10.35 10.838 10.837Q10.35 11.325 10.35 12Q10.35 12.675 10.838 13.162Q11.325 13.65 12 13.65ZM6.9 19H16.975Q15.875 18.2 14.613 17.775Q13.35 17.35 11.925 17.35Q10.5 17.35 9.25 17.775Q8 18.2 6.9 19Z"/>
    </Icon>
  );
});

IconMaterialLocationHomeRoundedW100Filled.displayName = 'AmauiIconMaterialLocationHomeRoundedW100Filled';

export default IconMaterialLocationHomeRoundedW100Filled;
