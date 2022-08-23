import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSquareFootRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootRoundedW100Filled'
      short_name='SquareFoot'

      {...props}
    >
      <path d="M15.8 19H6.8Q6.05 19 5.525 18.475Q5 17.95 5 17.2V8.25Q5 7.75 5.425 7.575Q5.85 7.4 6.15 7.7L7.4 8.95L6.8 9.55L7.2 9.95L7.8 9.35L9.8 11.35L9.2 11.95L9.6 12.35L10.2 11.75L12.3 13.85L11.7 14.45L12.1 14.85L12.7 14.25L14.7 16.25L14.1 16.85L14.5 17.25L15.1 16.65L16.35 17.9Q16.65 18.2 16.463 18.6Q16.275 19 15.8 19ZM6 9.7V17.2Q6 17.55 6.225 17.775Q6.45 18 6.8 18H14.3Z"/>
    </Icon>
  );
});

IconMaterialSquareFootRoundedW100Filled.displayName = 'AmauiIconMaterialSquareFootRoundedW100Filled';

export default IconMaterialSquareFootRoundedW100Filled;
