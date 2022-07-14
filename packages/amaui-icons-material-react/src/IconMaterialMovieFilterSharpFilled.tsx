import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieFilterSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilterSharpFilled'
      short_name='MovieFilter'

      {...props}
    >
      <path d="M9.5 11 8.55 13.05 6.5 14 8.55 14.95 9.5 17 10.45 14.95 12.5 14 10.45 13.05ZM15.5 11 14.85 12.35 13.5 13 14.85 13.65 15.5 15 16.15 13.65 17.5 13 16.15 12.35ZM2 20V4H4L6 8H9L7 4H9L11 8H14L12 4H14L16 8H19L17 4H22V20Z"/>
    </Icon>
  );
});

export default IconMaterialMovieFilterSharpFilled;
