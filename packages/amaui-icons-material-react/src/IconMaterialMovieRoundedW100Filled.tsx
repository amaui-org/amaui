import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieRoundedW100Filled'
      short_name='Movie'

      {...props}
    >
      <path d="M4.8 5.3 6.15 8H9.15L7.8 5.3H9.8L11.15 8H14.15L12.8 5.3H14.8L16.15 8H19.15L17.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7H4.8Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3Z"/>
    </Icon>
  );
});

IconMaterialMovieRoundedW100Filled.displayName = 'AmauiIconMaterialMovieRoundedW100Filled';

export default IconMaterialMovieRoundedW100Filled;
