import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDrySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrySharpFilled'
      short_name='Dry'

      {...props}
    >
      <path d="M1 23V12.7L9.125 5L10.75 6.7L8.875 10H20V12.5H12V13.5H22V16H12V17H21V19.5H12V20.5H19V23ZM14.975 9 15.1 8.4Q15.225 7.8 15.013 7.2Q14.8 6.6 14.35 6.15Q13.6 5.375 13.263 4.412Q12.925 3.45 13.05 2.425L13.1 2H15L14.9 2.6Q14.8 3.2 14.963 3.775Q15.125 4.35 15.575 4.8Q16.325 5.575 16.7 6.562Q17.075 7.55 16.95 8.575L16.9 9ZM18.975 9 19.1 8.4Q19.225 7.8 19.013 7.2Q18.8 6.6 18.35 6.15Q17.6 5.375 17.263 4.412Q16.925 3.45 17.05 2.425L17.1 2H19L18.9 2.6Q18.8 3.2 18.962 3.775Q19.125 4.35 19.575 4.8Q20.325 5.575 20.7 6.562Q21.075 7.55 20.95 8.575L20.9 9Z"/>
    </Icon>
  );
});

IconMaterialDrySharpFilled.displayName = 'AmauiIconMaterialDrySharpFilled';

export default IconMaterialDrySharpFilled;
