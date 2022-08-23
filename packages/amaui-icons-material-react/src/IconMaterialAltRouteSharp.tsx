import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAltRouteSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltRouteSharp'
      short_name='AltRoute'

      {...props}
    >
      <path d="M11 22V17Q11 15.6 10.575 14.925Q10.15 14.25 9.45 13.6L10.875 12.175Q11.175 12.45 11.45 12.762Q11.725 13.075 12 13.425Q12.35 12.95 12.713 12.587Q13.075 12.225 13.45 11.875Q14.4 11 15.175 9.85Q15.95 8.7 16 5.825L14.425 7.4L13 6L17 2L21 6L19.6 7.4L18 5.825Q17.95 9.4 16.9 10.912Q15.85 12.425 14.8 13.375Q14 14.1 13.5 14.787Q13 15.475 13 17V22ZM6.2 8.175Q6.1 7.675 6.062 7.075Q6.025 6.475 6 5.825L4.4 7.4L3 6L7 2L11 6L9.575 7.4L8 5.85Q8 6.375 8.05 6.838Q8.1 7.3 8.15 7.7ZM8.35 12.575Q7.85 12.05 7.388 11.35Q6.925 10.65 6.575 9.625L8.5 9.15Q8.75 9.825 9.075 10.3Q9.4 10.775 9.775 11.15Z"/>
    </Icon>
  );
});

IconMaterialAltRouteSharp.displayName = 'AmauiIconMaterialAltRouteSharp';

export default IconMaterialAltRouteSharp;
