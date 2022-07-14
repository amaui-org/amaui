import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeightSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeightSharpFilled'
      short_name='Height'

      {...props}
    >
      <path d="M12 21 8 17 9.4 15.6 11 17.2V6.8L9.4 8.4L8 7L12 3L16 7L14.6 8.4L13 6.8V17.2L14.6 15.6L16 17Z"/>
    </Icon>
  );
});

export default IconMaterialHeightSharpFilled;
