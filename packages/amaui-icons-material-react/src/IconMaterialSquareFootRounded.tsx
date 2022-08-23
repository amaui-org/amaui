import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSquareFootRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFootRounded'
      short_name='SquareFoot'

      {...props}
    >
      <path d="M18.9 21H5.2Q4.3 21 3.65 20.35Q3 19.7 3 18.8V5.1Q3 4.375 3.675 4.087Q4.35 3.8 4.85 4.3L7.1 6.55L5.75 7.9L6.45 8.6L7.8 7.25L10.4 9.85L9.05 11.2L9.75 11.9L11.1 10.55L13.7 13.15L12.35 14.5L13.05 15.2L14.4 13.85L17 16.45L15.65 17.8L16.35 18.5L17.7 17.15L19.7 19.15Q20.2 19.65 19.913 20.325Q19.625 21 18.9 21ZM6 9.7V18Q6 18 6 18Q6 18 6 18H14.3Z"/>
    </Icon>
  );
});

IconMaterialSquareFootRounded.displayName = 'AmauiIconMaterialSquareFootRounded';

export default IconMaterialSquareFootRounded;
