import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicSharp'
      short_name='Mic'

      {...props}
    >
      <path d="M12 14Q10.75 14 9.875 13.125Q9 12.25 9 11V5Q9 3.75 9.875 2.875Q10.75 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5V11Q15 12.25 14.125 13.125Q13.25 14 12 14ZM12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8ZM11 21V17.9Q8.4 17.55 6.7 15.588Q5 13.625 5 11H7Q7 13.075 8.463 14.537Q9.925 16 12 16Q14.075 16 15.538 14.537Q17 13.075 17 11H19Q19 13.625 17.3 15.588Q15.6 17.55 13 17.9V21ZM12 12Q12.425 12 12.713 11.712Q13 11.425 13 11V5Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5V11Q11 11.425 11.288 11.712Q11.575 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialMicSharp.displayName = 'AmauiIconMaterialMicSharp';

export default IconMaterialMicSharp;
