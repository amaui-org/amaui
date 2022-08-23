import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieFilterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieFilterRounded'
      short_name='MovieFilter'

      {...props}
    >
      <path d="M9.5 11 8.55 13.05 6.5 14 8.55 14.95 9.5 17 10.45 14.95 12.5 14 10.45 13.05ZM15.5 11 14.85 12.35 13.5 13 14.85 13.65 15.5 15 16.15 13.65 17.5 13 16.15 12.35ZM4 4 6 8H9L7 4H9L11 8H14L12 4H14L16 8H19L17 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4ZM4 10V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V10ZM4 10V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialMovieFilterRounded.displayName = 'AmauiIconMaterialMovieFilterRounded';

export default IconMaterialMovieFilterRounded;
