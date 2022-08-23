import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLocationRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationRoundedFilled'
      short_name='AddLocation'

      {...props}
    >
      <path d="M12 14Q12.425 14 12.713 13.712Q13 13.425 13 13V11H15Q15.425 11 15.713 10.712Q16 10.425 16 10Q16 9.575 15.713 9.287Q15.425 9 15 9H13V7Q13 6.575 12.713 6.287Q12.425 6 12 6Q11.575 6 11.288 6.287Q11 6.575 11 7V9H9Q8.575 9 8.288 9.287Q8 9.575 8 10Q8 10.425 8.288 10.712Q8.575 11 9 11H11V13Q11 13.425 11.288 13.712Q11.575 14 12 14ZM12 21.625Q11.8 21.625 11.6 21.55Q11.4 21.475 11.25 21.35Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2Q20 12.6 18.2 15.363Q16.4 18.125 12.75 21.35Q12.6 21.475 12.4 21.55Q12.2 21.625 12 21.625Z"/>
    </Icon>
  );
});

IconMaterialAddLocationRoundedFilled.displayName = 'AmauiIconMaterialAddLocationRoundedFilled';

export default IconMaterialAddLocationRoundedFilled;
