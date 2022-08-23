import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarHalfSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfSharpFilled'
      short_name='StarHalf'

      {...props}
    >
      <path d="M12 8.9V14.8L14.4 16.65L13.5 13.6L15.75 12H12.95ZM5.825 22 8.15 14.4 2 10H9.6L12 2L14.4 10H22L15.85 14.4L18.175 22L12 17.3Z"/>
    </Icon>
  );
});

IconMaterialStarHalfSharpFilled.displayName = 'AmauiIconMaterialStarHalfSharpFilled';

export default IconMaterialStarHalfSharpFilled;
