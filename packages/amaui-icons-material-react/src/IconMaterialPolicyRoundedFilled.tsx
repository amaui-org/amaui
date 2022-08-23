import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolicyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyRoundedFilled'
      short_name='Policy'

      {...props}
    >
      <path d="M12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM12 21.85Q11.725 21.85 11.488 21.812Q11.25 21.775 11.05 21.7Q7.95 20.55 5.975 17.6Q4 14.65 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 12.6 19.6 14.125Q19.2 15.65 18.4 17L15.45 14.05Q15.725 13.575 15.863 13.062Q16 12.55 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Q12.525 16 13.038 15.863Q13.55 15.725 14 15.45L17.225 18.675Q16.35 19.725 15.275 20.488Q14.2 21.25 12.95 21.7Q12.75 21.775 12.512 21.812Q12.275 21.85 12 21.85Z"/>
    </Icon>
  );
});

IconMaterialPolicyRoundedFilled.displayName = 'AmauiIconMaterialPolicyRoundedFilled';

export default IconMaterialPolicyRoundedFilled;
