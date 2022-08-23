import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpokeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpokeSharpW100Filled'
      short_name='Spoke'

      {...props}
    >
      <path d="M12 9.7Q10.875 9.7 10.088 8.912Q9.3 8.125 9.3 7Q9.3 5.875 10.088 5.087Q10.875 4.3 12 4.3Q13.125 4.3 13.913 5.087Q14.7 5.875 14.7 7Q14.7 8.125 13.913 8.912Q13.125 9.7 12 9.7ZM7 19.7Q5.875 19.7 5.088 18.913Q4.3 18.125 4.3 17Q4.3 15.875 5.088 15.087Q5.875 14.3 7 14.3Q8.125 14.3 8.913 15.087Q9.7 15.875 9.7 17Q9.7 18.125 8.913 18.913Q8.125 19.7 7 19.7ZM17 19.7Q15.875 19.7 15.088 18.913Q14.3 18.125 14.3 17Q14.3 15.875 15.088 15.087Q15.875 14.3 17 14.3Q18.125 14.3 18.913 15.087Q19.7 15.875 19.7 17Q19.7 18.125 18.913 18.913Q18.125 19.7 17 19.7Z"/>
    </Icon>
  );
});

IconMaterialSpokeSharpW100Filled.displayName = 'AmauiIconMaterialSpokeSharpW100Filled';

export default IconMaterialSpokeSharpW100Filled;
