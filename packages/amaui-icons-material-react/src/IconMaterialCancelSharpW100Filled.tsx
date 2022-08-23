import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCancelSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelSharpW100Filled'
      short_name='Cancel'

      {...props}
    >
      <path d="M12 20.7Q10.175 20.7 8.588 20.025Q7 19.35 5.825 18.175Q4.65 17 3.975 15.412Q3.3 13.825 3.3 12Q3.3 10.175 3.975 8.587Q4.65 7 5.825 5.825Q7 4.65 8.588 3.975Q10.175 3.3 12 3.3Q13.825 3.3 15.413 3.975Q17 4.65 18.175 5.825Q19.35 7 20.025 8.587Q20.7 10.175 20.7 12Q20.7 13.825 20.025 15.412Q19.35 17 18.175 18.175Q17 19.35 15.413 20.025Q13.825 20.7 12 20.7ZM8.4 16.1 12 12.5 15.6 16.1 16.1 15.6 12.5 12 16.1 8.4 15.6 7.9 12 11.5 8.4 7.9 7.9 8.4 11.5 12 7.9 15.6Z"/>
    </Icon>
  );
});

IconMaterialCancelSharpW100Filled.displayName = 'AmauiIconMaterialCancelSharpW100Filled';

export default IconMaterialCancelSharpW100Filled;
