import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMovieSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieSharpW700'
      short_name='Movie'

      {...props}
    >
      <path d="M1.15 20.85V3.15H4.3L6.3 7.15H9.3L7.3 3.15H9.3L11.3 7.15H14.3L12.3 3.15H14.3L16.3 7.15H19.3L17.3 3.15H22.85V20.85ZM4.3 10.3V17.7H19.7V10.3ZM4.3 10.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialMovieSharpW700;
