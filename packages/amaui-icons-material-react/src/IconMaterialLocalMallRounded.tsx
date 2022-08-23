import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalMallRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMallRounded'
      short_name='LocalMall'

      {...props}
    >
      <path d="M19 22H5Q4.175 22 3.587 21.413Q3 20.825 3 20V8Q3 7.175 3.587 6.588Q4.175 6 5 6H7Q7 3.925 8.463 2.462Q9.925 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6H19Q19.825 6 20.413 6.588Q21 7.175 21 8V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM9 6H15Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.75 3 9.875 3.875Q9 4.75 9 6ZM19 20Q19 20 19 20Q19 20 19 20V8Q19 8 19 8Q19 8 19 8H5Q5 8 5 8Q5 8 5 8V20Q5 20 5 20Q5 20 5 20ZM12 14Q13.85 14 15.35 12.775Q16.85 11.55 16.825 10.025Q16.825 9.6 16.55 9.3Q16.275 9 15.85 9Q15.5 9 15.225 9.225Q14.95 9.45 14.825 9.9Q14.55 10.85 13.75 11.425Q12.95 12 12 12Q11.05 12 10.238 11.425Q9.425 10.85 9.175 9.9Q9.05 9.425 8.8 9.212Q8.55 9 8.2 9Q7.775 9 7.488 9.3Q7.2 9.6 7.2 10.025Q7.2 11.55 8.675 12.775Q10.15 14 12 14ZM5 8Q5 8 5 8Q5 8 5 8V20Q5 20 5 20Q5 20 5 20Q5 20 5 20Q5 20 5 20V8Q5 8 5 8Q5 8 5 8Z"/>
    </Icon>
  );
});

IconMaterialLocalMallRounded.displayName = 'AmauiIconMaterialLocalMallRounded';

export default IconMaterialLocalMallRounded;
