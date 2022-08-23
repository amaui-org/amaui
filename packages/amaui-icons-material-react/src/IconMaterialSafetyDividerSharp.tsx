import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSafetyDividerSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyDividerSharp'
      short_name='SafetyDivider'

      {...props}
    >
      <path d="M11 19V5H13V19ZM5 12Q4.175 12 3.587 11.412Q3 10.825 3 10Q3 9.175 3.587 8.587Q4.175 8 5 8Q5.825 8 6.412 8.587Q7 9.175 7 10Q7 10.825 6.412 11.412Q5.825 12 5 12ZM1 16V15.425Q1 14.825 1.325 14.325Q1.65 13.825 2.225 13.575Q2.875 13.3 3.562 13.15Q4.25 13 5 13Q5.75 13 6.438 13.15Q7.125 13.3 7.775 13.575Q8.35 13.825 8.675 14.325Q9 14.825 9 15.425V16ZM19 12Q18.175 12 17.587 11.412Q17 10.825 17 10Q17 9.175 17.587 8.587Q18.175 8 19 8Q19.825 8 20.413 8.587Q21 9.175 21 10Q21 10.825 20.413 11.412Q19.825 12 19 12ZM15 16V15.425Q15 14.825 15.325 14.325Q15.65 13.825 16.225 13.575Q16.875 13.3 17.562 13.15Q18.25 13 19 13Q19.75 13 20.438 13.15Q21.125 13.3 21.775 13.575Q22.35 13.825 22.675 14.325Q23 14.825 23 15.425V16Z"/>
    </Icon>
  );
});

IconMaterialSafetyDividerSharp.displayName = 'AmauiIconMaterialSafetyDividerSharp';

export default IconMaterialSafetyDividerSharp;
