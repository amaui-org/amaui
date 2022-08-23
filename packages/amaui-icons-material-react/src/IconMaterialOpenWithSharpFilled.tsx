import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenWithSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenWithSharpFilled'
      short_name='OpenWith'

      {...props}
    >
      <path d="M11 10V5.85L9.2 7.65L7.75 6.25L12 2L16.25 6.25L14.8 7.7L13 5.85V10ZM12 22 7.75 17.75 9.2 16.3 11 18.15V14H13V18.15L14.8 16.3L16.25 17.75ZM17.75 16.25 16.3 14.8 18.15 13H14V11H18.15L16.3 9.2L17.75 7.75L22 12ZM6.25 16.25 2 12 6.25 7.75 7.65 9.2 5.85 11H10V13H5.85L7.7 14.8Z"/>
    </Icon>
  );
});

IconMaterialOpenWithSharpFilled.displayName = 'AmauiIconMaterialOpenWithSharpFilled';

export default IconMaterialOpenWithSharpFilled;
