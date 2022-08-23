import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallEndSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndSharpW100Filled'
      short_name='CallEnd'

      {...props}
    >
      <path d="M4.1 16.175 1.325 13.45Q3.575 11.05 6.35 9.85Q9.125 8.65 12.025 8.65Q14.925 8.65 17.7 9.85Q20.475 11.05 22.725 13.45L19.95 16.175L16.675 13.7V10.2Q15.475 9.775 14.3 9.562Q13.125 9.35 12.025 9.35Q10.925 9.35 9.75 9.562Q8.575 9.775 7.375 10.2V13.7Z"/>
    </Icon>
  );
});

IconMaterialCallEndSharpW100Filled.displayName = 'AmauiIconMaterialCallEndSharpW100Filled';

export default IconMaterialCallEndSharpW100Filled;
