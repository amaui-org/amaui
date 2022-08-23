import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVisibilitySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilitySharpW100Filled'
      short_name='Visibility'

      {...props}
    >
      <path d="M12 14.9Q13.425 14.9 14.413 13.912Q15.4 12.925 15.4 11.5Q15.4 10.075 14.413 9.087Q13.425 8.1 12 8.1Q10.575 8.1 9.588 9.087Q8.6 10.075 8.6 11.5Q8.6 12.925 9.588 13.912Q10.575 14.9 12 14.9ZM12 14.2Q10.875 14.2 10.088 13.412Q9.3 12.625 9.3 11.5Q9.3 10.375 10.088 9.587Q10.875 8.8 12 8.8Q13.125 8.8 13.913 9.587Q14.7 10.375 14.7 11.5Q14.7 12.625 13.913 13.412Q13.125 14.2 12 14.2ZM12 17.7Q8.875 17.7 6.3 16.012Q3.725 14.325 2.4 11.5Q3.725 8.675 6.3 6.987Q8.875 5.3 12 5.3Q15.125 5.3 17.7 6.987Q20.275 8.675 21.6 11.5Q20.275 14.325 17.7 16.012Q15.125 17.7 12 17.7Z"/>
    </Icon>
  );
});

IconMaterialVisibilitySharpW100Filled.displayName = 'AmauiIconMaterialVisibilitySharpW100Filled';

export default IconMaterialVisibilitySharpW100Filled;
