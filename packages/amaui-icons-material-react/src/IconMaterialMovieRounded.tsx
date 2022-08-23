import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieRounded'
      short_name='Movie'

      {...props}
    >
      <path d="M4 4 6 8H9L7 4H9L11 8H14L12 4H14L16 8H19L17 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4ZM4 10V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V10ZM4 10V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialMovieRounded.displayName = 'AmauiIconMaterialMovieRounded';

export default IconMaterialMovieRounded;
