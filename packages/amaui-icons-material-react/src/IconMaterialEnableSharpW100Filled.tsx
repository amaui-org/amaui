import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEnableSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnableSharpW100Filled'
      short_name='Enable'

      {...props}
    >
      <path d="M12 15.075 7.9 10.975 8.4 10.475 11.65 13.725V3.325H12.35V13.725L15.6 10.475L16.1 10.975ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 8.975 5.05 6.725Q6.8 4.475 9.65 3.625V4.375Q7.05 5.175 5.525 7.275Q4 9.375 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 9.375 18.475 7.275Q16.95 5.175 14.35 4.375V3.625Q17.2 4.475 18.95 6.725Q20.7 8.975 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialEnableSharpW100Filled.displayName = 'AmauiIconMaterialEnableSharpW100Filled';

export default IconMaterialEnableSharpW100Filled;
