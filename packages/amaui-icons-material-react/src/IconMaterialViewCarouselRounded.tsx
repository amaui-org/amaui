import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCarouselRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselRounded'
      short_name='ViewCarousel'

      {...props}
    >
      <path d="M3 17Q2.575 17 2.288 16.712Q2 16.425 2 16V8Q2 7.575 2.288 7.287Q2.575 7 3 7H5Q5.425 7 5.713 7.287Q6 7.575 6 8V16Q6 16.425 5.713 16.712Q5.425 17 5 17ZM8 19Q7.575 19 7.287 18.712Q7 18.425 7 18V6Q7 5.575 7.287 5.287Q7.575 5 8 5H16Q16.425 5 16.712 5.287Q17 5.575 17 6V18Q17 18.425 16.712 18.712Q16.425 19 16 19ZM9 7V17ZM19 17Q18.575 17 18.288 16.712Q18 16.425 18 16V8Q18 7.575 18.288 7.287Q18.575 7 19 7H21Q21.425 7 21.712 7.287Q22 7.575 22 8V16Q22 16.425 21.712 16.712Q21.425 17 21 17ZM9 7V17H15V7Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselRounded.displayName = 'AmauiIconMaterialViewCarouselRounded';

export default IconMaterialViewCarouselRounded;
