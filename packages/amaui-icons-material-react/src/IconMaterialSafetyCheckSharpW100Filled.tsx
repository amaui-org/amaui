import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSafetyCheckSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckSharpW100Filled'
      short_name='SafetyCheck'

      {...props}
    >
      <path d="M12 20.65Q9.125 19.75 7.213 17.1Q5.3 14.45 5.3 11.1V5.9L12 3.4L18.7 5.9V11.1Q18.7 14.45 16.788 17.1Q14.875 19.75 12 20.65ZM12 15.725Q13.55 15.725 14.625 14.65Q15.7 13.575 15.7 12.025Q15.7 10.475 14.625 9.4Q13.55 8.325 12 8.325Q10.45 8.325 9.375 9.4Q8.3 10.475 8.3 12.025Q8.3 13.575 9.375 14.65Q10.45 15.725 12 15.725ZM13.65 14.175 11.65 12.175V9.175H12.35V11.875L14.15 13.675Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckSharpW100Filled.displayName = 'AmauiIconMaterialSafetyCheckSharpW100Filled';

export default IconMaterialSafetyCheckSharpW100Filled;
