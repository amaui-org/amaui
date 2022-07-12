import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieSharpW700Filled'
      short_name='Movie'

      {...props}
    >
      <path d="M1.15 20.85V3.15H4.3L6.3 7.15H9.3L7.3 3.15H9.3L11.3 7.15H14.3L12.3 3.15H14.3L16.3 7.15H19.3L17.3 3.15H22.85V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialMovieSharpW700Filled;
