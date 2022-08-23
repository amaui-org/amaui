import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsRoundedFilled'
      short_name='Mms'

      {...props}
    >
      <path d="M7 14H17Q17.3 14 17.45 13.725Q17.6 13.45 17.4 13.2L14.65 9.525Q14.5 9.325 14.25 9.325Q14 9.325 13.85 9.525L11.25 13L9.4 10.525Q9.25 10.325 9 10.325Q8.75 10.325 8.6 10.525L6.6 13.2Q6.4 13.45 6.55 13.725Q6.7 14 7 14ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterialMmsRoundedFilled.displayName = 'AmauiIconMaterialMmsRoundedFilled';

export default IconMaterialMmsRoundedFilled;
