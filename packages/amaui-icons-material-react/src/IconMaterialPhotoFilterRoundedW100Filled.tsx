import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoFilterRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilterRoundedW100Filled'
      short_name='PhotoFilter'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H14.85Q15 4.3 15.1 4.4Q15.2 4.5 15.2 4.65Q15.2 4.8 15.1 4.9Q15 5 14.85 5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V9.15Q19 9 19.1 8.9Q19.2 8.8 19.35 8.8Q19.5 8.8 19.6 8.9Q19.7 9 19.7 9.15V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM11.05 12.95 9.75 12.375Q9.5 12.25 9.5 12Q9.5 11.75 9.75 11.625L11.05 11.05L11.625 9.75Q11.75 9.5 12 9.5Q12.25 9.5 12.375 9.75L12.95 11.05L14.25 11.625Q14.5 11.75 14.5 12Q14.5 12.25 14.25 12.375L12.95 12.95L12.375 14.25Q12.25 14.5 12 14.5Q11.75 14.5 11.625 14.25ZM16.5 7.525 15.8 7.175Q15.575 7.05 15.575 6.825Q15.575 6.6 15.8 6.475L16.5 6.125L16.85 5.425Q16.975 5.2 17.2 5.2Q17.425 5.2 17.55 5.425L17.9 6.125L18.6 6.475Q18.825 6.6 18.825 6.825Q18.825 7.05 18.6 7.175L17.9 7.525L17.55 8.225Q17.425 8.45 17.2 8.45Q16.975 8.45 16.85 8.225Z"/>
    </Icon>
  );
});

IconMaterialPhotoFilterRoundedW100Filled.displayName = 'AmauiIconMaterialPhotoFilterRoundedW100Filled';

export default IconMaterialPhotoFilterRoundedW100Filled;
