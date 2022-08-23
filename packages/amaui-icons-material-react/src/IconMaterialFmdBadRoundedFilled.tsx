import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFmdBadRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBadRoundedFilled'
      short_name='FmdBad'

      {...props}
    >
      <path d="M12 11Q12.425 11 12.713 10.712Q13 10.425 13 10V7Q13 6.575 12.713 6.287Q12.425 6 12 6Q11.575 6 11.288 6.287Q11 6.575 11 7V10Q11 10.425 11.288 10.712Q11.575 11 12 11ZM12 15Q12.425 15 12.713 14.712Q13 14.425 13 14Q13 13.575 12.713 13.287Q12.425 13 12 13Q11.575 13 11.288 13.287Q11 13.575 11 14Q11 14.425 11.288 14.712Q11.575 15 12 15ZM12 21.625Q11.8 21.625 11.6 21.55Q11.4 21.475 11.25 21.35Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 12.6 18.2 15.363Q16.4 18.125 12.75 21.35Q12.6 21.475 12.4 21.55Q12.2 21.625 12 21.625Z"/>
    </Icon>
  );
});

IconMaterialFmdBadRoundedFilled.displayName = 'AmauiIconMaterialFmdBadRoundedFilled';

export default IconMaterialFmdBadRoundedFilled;
