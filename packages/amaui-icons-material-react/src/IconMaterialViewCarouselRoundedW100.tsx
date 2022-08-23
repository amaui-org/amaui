import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewCarouselRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCarouselRoundedW100'
      short_name='ViewCarousel'

      {...props}
    >
      <path d="M4.45 15.7Q4.125 15.7 3.913 15.488Q3.7 15.275 3.7 14.95V9.05Q3.7 8.725 3.913 8.512Q4.125 8.3 4.45 8.3H5.25Q5.575 8.3 5.787 8.512Q6 8.725 6 9.05V14.95Q6 15.275 5.787 15.488Q5.575 15.7 5.25 15.7ZM9.05 17.7Q8.725 17.7 8.512 17.487Q8.3 17.275 8.3 16.95V7.05Q8.3 6.725 8.512 6.512Q8.725 6.3 9.05 6.3H14.95Q15.275 6.3 15.488 6.512Q15.7 6.725 15.7 7.05V16.95Q15.7 17.275 15.488 17.487Q15.275 17.7 14.95 17.7ZM9 7V17ZM18.75 15.7Q18.425 15.7 18.212 15.488Q18 15.275 18 14.95V9.05Q18 8.725 18.212 8.512Q18.425 8.3 18.75 8.3H19.55Q19.875 8.3 20.087 8.512Q20.3 8.725 20.3 9.05V14.95Q20.3 15.275 20.087 15.488Q19.875 15.7 19.55 15.7ZM9 7V17H15V7Z"/>
    </Icon>
  );
});

IconMaterialViewCarouselRoundedW100.displayName = 'AmauiIconMaterialViewCarouselRoundedW100';

export default IconMaterialViewCarouselRoundedW100;
