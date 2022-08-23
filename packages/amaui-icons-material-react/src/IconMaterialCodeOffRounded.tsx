import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffRounded'
      short_name='CodeOff'

      {...props}
    >
      <path d="M19.075 21.9 7 9.85 4.825 12.025 8.725 15.925Q9 16.2 9 16.6Q9 17 8.7 17.3Q8.425 17.575 8 17.575Q7.575 17.575 7.3 17.3L2.7 12.7Q2.4 12.4 2.4 12Q2.4 11.6 2.7 11.3L5.575 8.425L2.075 4.925Q1.8 4.65 1.8 4.237Q1.8 3.825 2.1 3.525Q2.4 3.225 2.812 3.225Q3.225 3.225 3.525 3.525L20.5 20.5Q20.775 20.775 20.788 21.188Q20.8 21.6 20.5 21.9Q20.2 22.2 19.788 22.2Q19.375 22.2 19.075 21.9ZM18.425 15.575 17 14.15 19.175 11.975 15.275 8.075Q15 7.8 15 7.4Q15 7 15.3 6.7Q15.575 6.425 16 6.425Q16.425 6.425 16.7 6.7L21.3 11.3Q21.6 11.6 21.6 12Q21.6 12.4 21.3 12.7Z"/>
    </Icon>
  );
});

IconMaterialCodeOffRounded.displayName = 'AmauiIconMaterialCodeOffRounded';

export default IconMaterialCodeOffRounded;
