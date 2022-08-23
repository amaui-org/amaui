import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolicyRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyRoundedW100Filled'
      short_name='Policy'

      {...props}
    >
      <path d="M12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM12 20.525Q11.8 20.525 11.638 20.487Q11.475 20.45 11.35 20.4Q8.725 19.325 7.013 16.8Q5.3 14.275 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 12.45 18.325 13.863Q17.95 15.275 17.15 16.55L14.2 13.6Q14.425 13.25 14.562 12.837Q14.7 12.425 14.7 12Q14.7 10.875 13.913 10.087Q13.125 9.3 12 9.3Q10.875 9.3 10.088 10.087Q9.3 10.875 9.3 12Q9.3 13.125 10.088 13.912Q10.875 14.7 12 14.7Q12.475 14.7 12.913 14.55Q13.35 14.4 13.7 14.1L16.75 17.15Q15.95 18.275 14.825 19.125Q13.7 19.975 12.65 20.4Q12.525 20.45 12.363 20.487Q12.2 20.525 12 20.525Z"/>
    </Icon>
  );
});

IconMaterialPolicyRoundedW100Filled.displayName = 'AmauiIconMaterialPolicyRoundedW100Filled';

export default IconMaterialPolicyRoundedW100Filled;
