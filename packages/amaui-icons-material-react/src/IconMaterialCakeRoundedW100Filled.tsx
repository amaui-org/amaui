import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeRoundedW100Filled'
      short_name='Cake'

      {...props}
    >
      <path d="M6.3 13.6V9.6Q6.3 8.95 6.725 8.525Q7.15 8.1 7.8 8.1H11.65V6.6Q11.225 6.325 10.938 5.987Q10.65 5.65 10.65 5.2Q10.65 4.925 10.75 4.688Q10.85 4.45 11.05 4.25L11.725 3.575Q11.775 3.525 12 3.475Q12.025 3.475 12.275 3.575L12.95 4.25Q13.15 4.45 13.25 4.688Q13.35 4.925 13.35 5.2Q13.35 5.65 13.062 5.987Q12.775 6.325 12.35 6.6V8.1H16.2Q16.85 8.1 17.275 8.525Q17.7 8.95 17.7 9.6V13.6ZM4.95 20.7Q4.65 20.7 4.475 20.5Q4.3 20.3 4.3 20V15.8Q4.3 15.15 4.725 14.725Q5.15 14.3 5.8 14.3H18.2Q18.85 14.3 19.275 14.725Q19.7 15.15 19.7 15.8V20Q19.7 20.3 19.5 20.5Q19.3 20.7 19 20.7Z"/>
    </Icon>
  );
});

IconMaterialCakeRoundedW100Filled.displayName = 'AmauiIconMaterialCakeRoundedW100Filled';

export default IconMaterialCakeRoundedW100Filled;
