import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTheatersRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheatersRoundedFilled'
      short_name='Theaters'

      {...props}
    >
      <path d="M5 21Q4.575 21 4.287 20.712Q4 20.425 4 20V4Q4 3.575 4.287 3.287Q4.575 3 5 3Q5.425 3 5.713 3.287Q6 3.575 6 4V5H8V4Q8 3.575 8.288 3.287Q8.575 3 9 3H15Q15.425 3 15.713 3.287Q16 3.575 16 4V5H18V4Q18 3.575 18.288 3.287Q18.575 3 19 3Q19.425 3 19.712 3.287Q20 3.575 20 4V20Q20 20.425 19.712 20.712Q19.425 21 19 21Q18.575 21 18.288 20.712Q18 20.425 18 20V19H16V20Q16 20.425 15.713 20.712Q15.425 21 15 21H9Q8.575 21 8.288 20.712Q8 20.425 8 20V19H6V20Q6 20.425 5.713 20.712Q5.425 21 5 21ZM6 17H8V15H6ZM6 13H8V11H6ZM6 9H8V7H6ZM16 17H18V15H16ZM16 13H18V11H16ZM16 9H18V7H16Z"/>
    </Icon>
  );
});

IconMaterialTheatersRoundedFilled.displayName = 'AmauiIconMaterialTheatersRoundedFilled';

export default IconMaterialTheatersRoundedFilled;
