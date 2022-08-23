import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrivacyTipRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyTipRoundedFilled'
      short_name='PrivacyTip'

      {...props}
    >
      <path d="M12 17Q12.425 17 12.713 16.712Q13 16.425 13 16V12Q13 11.575 12.713 11.287Q12.425 11 12 11Q11.575 11 11.288 11.287Q11 11.575 11 12V16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9ZM12 21.925Q11.875 21.925 11.75 21.925Q11.625 21.925 11.525 21.875Q8.25 20.85 6.125 17.812Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.775 17.875 17.812Q15.75 20.85 12.475 21.875Q12.35 21.925 12 21.925Z"/>
    </Icon>
  );
});

IconMaterialPrivacyTipRoundedFilled.displayName = 'AmauiIconMaterialPrivacyTipRoundedFilled';

export default IconMaterialPrivacyTipRoundedFilled;
