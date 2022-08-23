import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbTwilightRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilightRounded'
      short_name='WbTwilight'

      {...props}
    >
      <path d="M17.65 9.375Q17.35 9.075 17.363 8.662Q17.375 8.25 17.675 7.95L18.4 7.225Q18.675 6.95 19.087 6.95Q19.5 6.95 19.8 7.25Q20.075 7.525 20.075 7.95Q20.075 8.375 19.8 8.65L19.05 9.4Q18.775 9.675 18.363 9.675Q17.95 9.675 17.65 9.375ZM3 20Q2.575 20 2.288 19.712Q2 19.425 2 19Q2 18.575 2.288 18.288Q2.575 18 3 18H21Q21.425 18 21.712 18.288Q22 18.575 22 19Q22 19.425 21.712 19.712Q21.425 20 21 20ZM12 7Q11.575 7 11.288 6.713Q11 6.425 11 6V5Q11 4.575 11.288 4.287Q11.575 4 12 4Q12.425 4 12.713 4.287Q13 4.575 13 5V6Q13 6.425 12.713 6.713Q12.425 7 12 7ZM4.95 9.325 4.225 8.6Q3.95 8.325 3.95 7.912Q3.95 7.5 4.25 7.2Q4.525 6.925 4.95 6.925Q5.375 6.925 5.65 7.2L6.4 7.95Q6.675 8.225 6.675 8.637Q6.675 9.05 6.375 9.35Q6.075 9.65 5.662 9.637Q5.25 9.625 4.95 9.325ZM5 16Q5 13.075 7.038 11.037Q9.075 9 12 9Q14.925 9 16.962 11.037Q19 13.075 19 16Z"/>
    </Icon>
  );
});

IconMaterialWbTwilightRounded.displayName = 'AmauiIconMaterialWbTwilightRounded';

export default IconMaterialWbTwilightRounded;
