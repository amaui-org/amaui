import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneDisabledRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabledRoundedW100Filled'
      short_name='PhoneDisabled'

      {...props}
    >
      <path d="M16.2 13.45 15.7 12.95Q16.125 12.425 16.587 11.762Q17.05 11.1 17.4 10.5L15.3 8.575Q15.025 8.325 14.938 8Q14.85 7.675 14.925 7.3L15.375 5.25Q15.475 4.825 15.788 4.562Q16.1 4.3 16.55 4.3H18.55Q19 4.3 19.3 4.6Q19.6 4.9 19.6 5.35Q19.6 7.425 18.65 9.55Q17.7 11.675 16.2 13.45ZM5.35 19.55Q4.9 19.55 4.6 19.25Q4.3 18.95 4.3 18.5V16.55Q4.3 16.1 4.562 15.788Q4.825 15.475 5.25 15.375L6.95 15.025Q7.325 14.95 7.6 15.037Q7.875 15.125 8.15 15.4L10.2 17.55Q11.15 17.025 12.075 16.362Q13 15.7 13.85 14.95L3.55 4.65Q3.45 4.55 3.438 4.412Q3.425 4.275 3.55 4.15Q3.675 4.025 3.8 4.025Q3.925 4.025 4.05 4.15L19.95 20.05Q20.05 20.15 20.062 20.288Q20.075 20.425 19.95 20.55Q19.825 20.675 19.7 20.675Q19.575 20.675 19.45 20.55L14.35 15.45Q12.1 17.45 9.825 18.5Q7.55 19.55 5.35 19.55Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabledRoundedW100Filled.displayName = 'AmauiIconMaterialPhoneDisabledRoundedW100Filled';

export default IconMaterialPhoneDisabledRoundedW100Filled;
