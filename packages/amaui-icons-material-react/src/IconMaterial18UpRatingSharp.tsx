import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial18UpRatingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='18UpRatingSharp'
      short_name='18UpRating'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H19V5H5ZM5 5V19ZM8.5 15H10V9H7V10.5H8.5ZM11.5 15H16V9H11.5ZM13 11.5V10H14.5V11.5ZM13 14V12.5H14.5V14Z"/>
    </Icon>
  );
});

export default IconMaterial18UpRatingSharp;
