import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTramSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TramSharpW100Filled'
      short_name='Tram'

      {...props}
    >
      <path d="M5.3 17V8Q5.3 6.35 7.075 5.85Q8.85 5.35 11.6 5.3L12.35 3.8H7.1V3.1H16.9V3.8H13.15L12.4 5.3Q15.15 5.35 16.925 5.85Q18.7 6.35 18.7 8V17Q18.7 18.125 17.913 18.913Q17.125 19.7 16 19.7L17.5 21.2V21.7H17L15 19.7H9L7 21.7H6.5V21.2L8 19.7Q6.875 19.7 6.088 18.913Q5.3 18.125 5.3 17ZM12 17.5Q12.425 17.5 12.713 17.212Q13 16.925 13 16.5Q13 16.075 12.713 15.787Q12.425 15.5 12 15.5Q11.575 15.5 11.288 15.787Q11 16.075 11 16.5Q11 16.925 11.288 17.212Q11.575 17.5 12 17.5ZM6 13.3H18V8.4H6Z"/>
    </Icon>
  );
});

IconMaterialTramSharpW100Filled.displayName = 'AmauiIconMaterialTramSharpW100Filled';

export default IconMaterialTramSharpW100Filled;
