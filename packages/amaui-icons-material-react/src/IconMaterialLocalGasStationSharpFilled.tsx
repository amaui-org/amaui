import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalGasStationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalGasStationSharpFilled'
      short_name='LocalGasStation'

      {...props}
    >
      <path d="M4 21V3H14V12H17V19.5H19V11.3Q18.775 11.425 18.525 11.462Q18.275 11.5 18 11.5Q16.95 11.5 16.225 10.775Q15.5 10.05 15.5 9Q15.5 8.2 15.938 7.562Q16.375 6.925 17.1 6.65L15 4.55L16.05 3.5L19.75 7.1Q20.125 7.475 20.312 7.975Q20.5 8.475 20.5 9V21H15.5V13.5H14V21ZM6 10H12V5H6ZM18 10Q18.425 10 18.712 9.712Q19 9.425 19 9Q19 8.575 18.712 8.287Q18.425 8 18 8Q17.575 8 17.288 8.287Q17 8.575 17 9Q17 9.425 17.288 9.712Q17.575 10 18 10Z"/>
    </Icon>
  );
});

IconMaterialLocalGasStationSharpFilled.displayName = 'AmauiIconMaterialLocalGasStationSharpFilled';

export default IconMaterialLocalGasStationSharpFilled;
