import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieSharpFilled'
      short_name='Movie'

      {...props}
    >
      <path d="M2 20V4H4L6 8H9L7 4H9L11 8H14L12 4H14L16 8H19L17 4H22V20Z"/>
    </Icon>
  )
});

export default IconMaterialMovieSharpFilled;
