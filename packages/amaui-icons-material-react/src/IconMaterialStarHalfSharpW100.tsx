import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarHalfSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfSharpW100'
      short_name='StarHalf'

      {...props}
    >
      <path d="M12 8.9V14.825L14.45 16.7L13.525 13.625L15.775 12H12.925ZM8.25 18.55 9.65 13.9 6.075 11.3H10.55L12 6.5L13.45 11.3H17.925L14.35 13.9L15.75 18.55L12 15.7Z"/>
    </Icon>
  );
});

export default IconMaterialStarHalfSharpW100;
