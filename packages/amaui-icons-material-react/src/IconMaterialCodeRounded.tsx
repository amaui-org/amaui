import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeRounded'
      short_name='Code'

      {...props}
    >
      <path d="M16.7 17.3Q16.425 17.575 16.013 17.575Q15.6 17.575 15.3 17.275Q15 16.975 15 16.562Q15 16.15 15.3 15.85L19.175 11.975L15.275 8.075Q15 7.8 15.012 7.387Q15.025 6.975 15.3 6.7Q15.575 6.425 16 6.425Q16.425 6.425 16.7 6.7L21.3 11.3Q21.6 11.6 21.6 12Q21.6 12.4 21.3 12.7ZM7.3 17.3 2.7 12.7Q2.4 12.4 2.4 12Q2.4 11.6 2.7 11.3L7.3 6.7Q7.575 6.425 8 6.412Q8.425 6.4 8.725 6.7Q9.025 7 9.025 7.412Q9.025 7.825 8.725 8.125L4.825 12.025L8.725 15.925Q9 16.2 8.988 16.612Q8.975 17.025 8.7 17.3Q8.425 17.575 8 17.575Q7.575 17.575 7.3 17.3Z"/>
    </Icon>
  );
});

IconMaterialCodeRounded.displayName = 'AmauiIconMaterialCodeRounded';

export default IconMaterialCodeRounded;
