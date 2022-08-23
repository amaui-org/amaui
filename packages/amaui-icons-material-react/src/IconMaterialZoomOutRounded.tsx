import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialZoomOutRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZoomOutRounded'
      short_name='ZoomOut'

      {...props}
    >
      <path d="M18.9 20.3 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L20.325 18.925Q20.6 19.2 20.588 19.612Q20.575 20.025 20.3 20.3Q20.025 20.575 19.6 20.575Q19.175 20.575 18.9 20.3ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14ZM7.975 10.5Q7.55 10.5 7.275 10.212Q7 9.925 7 9.5Q7 9.075 7.287 8.787Q7.575 8.5 8 8.5H11.025Q11.45 8.5 11.725 8.787Q12 9.075 12 9.5Q12 9.925 11.713 10.212Q11.425 10.5 11 10.5Z"/>
    </Icon>
  );
});

IconMaterialZoomOutRounded.displayName = 'AmauiIconMaterialZoomOutRounded';

export default IconMaterialZoomOutRounded;
