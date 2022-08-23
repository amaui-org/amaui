import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneCallbackRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneCallbackRoundedW100Filled'
      short_name='PhoneCallback'

      {...props}
    >
      <path d="M13.65 11.25Q13.325 11.25 13.113 11.037Q12.9 10.825 12.9 10.5V6.9Q12.9 6.75 13 6.65Q13.1 6.55 13.25 6.55Q13.4 6.55 13.5 6.65Q13.6 6.75 13.6 6.9V10.05L18.95 4.7Q19.05 4.6 19.188 4.587Q19.325 4.575 19.45 4.7Q19.575 4.825 19.575 4.95Q19.575 5.075 19.45 5.2L14.1 10.55H17.25Q17.4 10.55 17.5 10.65Q17.6 10.75 17.6 10.9Q17.6 11.05 17.5 11.15Q17.4 11.25 17.25 11.25ZM18.6 19.55Q16.175 19.55 13.638 18.25Q11.1 16.95 9.038 14.887Q6.975 12.825 5.663 10.3Q4.35 7.775 4.35 5.35Q4.35 4.9 4.65 4.6Q4.95 4.3 5.4 4.3H7.4Q7.85 4.3 8.162 4.562Q8.475 4.825 8.575 5.25L9.025 7.3Q9.1 7.7 9.012 8.025Q8.925 8.35 8.65 8.575L6.55 10.5Q7.95 12.85 9.675 14.55Q11.4 16.25 13.75 17.55L15.8 15.4Q16.075 15.125 16.363 15.037Q16.65 14.95 17 15.025L18.7 15.375Q19.125 15.475 19.388 15.788Q19.65 16.1 19.65 16.55V18.5Q19.65 18.95 19.35 19.25Q19.05 19.55 18.6 19.55Z"/>
    </Icon>
  );
});

IconMaterialPhoneCallbackRoundedW100Filled.displayName = 'AmauiIconMaterialPhoneCallbackRoundedW100Filled';

export default IconMaterialPhoneCallbackRoundedW100Filled;
