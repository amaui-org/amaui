import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialErrorSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorSharpW100Filled'
      short_name='Error'

      {...props}
    >
      <path d="M12 20.7Q10.175 20.7 8.588 20.025Q7 19.35 5.825 18.175Q4.65 17 3.975 15.412Q3.3 13.825 3.3 12Q3.3 10.175 3.975 8.587Q4.65 7 5.825 5.825Q7 4.65 8.588 3.975Q10.175 3.3 12 3.3Q13.825 3.3 15.413 3.975Q17 4.65 18.175 5.825Q19.35 7 20.025 8.587Q20.7 10.175 20.7 12Q20.7 13.825 20.025 15.412Q19.35 17 18.175 18.175Q17 19.35 15.413 20.025Q13.825 20.7 12 20.7ZM11.65 13.2H12.35V7.2H11.65ZM12 16.3Q12.225 16.3 12.363 16.15Q12.5 16 12.5 15.8Q12.5 15.575 12.363 15.438Q12.225 15.3 12 15.3Q11.8 15.3 11.65 15.438Q11.5 15.575 11.5 15.8Q11.5 16 11.65 16.15Q11.8 16.3 12 16.3Z"/>
    </Icon>
  );
});

IconMaterialErrorSharpW100Filled.displayName = 'AmauiIconMaterialErrorSharpW100Filled';

export default IconMaterialErrorSharpW100Filled;
