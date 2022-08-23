import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarHalfRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfRounded'
      short_name='StarHalf'

      {...props}
    >
      <path d="M14.4 16.65 13.5 13.6 15.75 12H12.95L12 8.9V14.8ZM8.3 20.125Q7.725 20.575 7.125 20.15Q6.525 19.725 6.725 19.025L8.15 14.4L4.525 11.825Q3.925 11.4 4.163 10.7Q4.4 10 5.125 10H9.6L11.05 5.2Q11.175 4.85 11.438 4.662Q11.7 4.475 12 4.475Q12.3 4.475 12.562 4.662Q12.825 4.85 12.95 5.2L14.4 10H18.875Q19.6 10 19.838 10.7Q20.075 11.4 19.475 11.825L15.85 14.4L17.275 19.025Q17.475 19.725 16.875 20.15Q16.275 20.575 15.7 20.125L12 17.3Z"/>
    </Icon>
  );
});

IconMaterialStarHalfRounded.displayName = 'AmauiIconMaterialStarHalfRounded';

export default IconMaterialStarHalfRounded;
