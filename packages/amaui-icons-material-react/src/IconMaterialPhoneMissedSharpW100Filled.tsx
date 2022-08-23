import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneMissedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedSharpW100Filled'
      short_name='PhoneMissed'

      {...props}
    >
      <path d="M4.1 19.675 1.325 16.95Q3.575 14.55 6.35 13.35Q9.125 12.15 12.025 12.15Q14.925 12.15 17.7 13.35Q20.475 14.55 22.725 16.95L19.95 19.675L16.675 17.2V13.7Q15.475 13.275 14.3 13.062Q13.125 12.85 12.025 12.85Q10.925 12.85 9.75 13.062Q8.575 13.275 7.375 13.7V17.2ZM11.975 10 6.375 4.4V7.9H5.675V3.2H10.375V3.9H6.875L11.975 9L17.625 3.35L18.125 3.85Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedSharpW100Filled.displayName = 'AmauiIconMaterialPhoneMissedSharpW100Filled';

export default IconMaterialPhoneMissedSharpW100Filled;
