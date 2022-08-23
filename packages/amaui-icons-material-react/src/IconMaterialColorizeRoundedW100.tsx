import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialColorizeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeRoundedW100'
      short_name='Colorize'

      {...props}
    >
      <path d="M5.2 19.7Q4.875 19.7 4.662 19.487Q4.45 19.275 4.45 18.95V17.1Q4.45 16.95 4.5 16.825Q4.55 16.7 4.675 16.575L13 8.25L11.35 6.65Q11.225 6.55 11.225 6.412Q11.225 6.275 11.35 6.15Q11.45 6.05 11.588 6.05Q11.725 6.05 11.85 6.15L14 8.25L17.5 4.75Q17.65 4.6 17.875 4.6Q18.1 4.6 18.25 4.75L19.4 5.9Q19.55 6.05 19.55 6.275Q19.55 6.5 19.4 6.65L15.85 10.2L18 12.35Q18.1 12.45 18.113 12.587Q18.125 12.725 18 12.85Q17.875 12.975 17.75 12.975Q17.625 12.975 17.5 12.85L15.85 11.2L7.575 19.475Q7.45 19.6 7.325 19.65Q7.2 19.7 7.05 19.7ZM5.15 19H7.1L15.4 10.65L13.5 8.75L5.15 17.05ZM15.4 9.65 18.775 6.275 17.875 5.375 14.5 8.75ZM15.4 9.65 14.5 8.75 15.4 9.65Z"/>
    </Icon>
  );
});

IconMaterialColorizeRoundedW100.displayName = 'AmauiIconMaterialColorizeRoundedW100';

export default IconMaterialColorizeRoundedW100;
