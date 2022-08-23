import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSharp'
      short_name='Call'

      {...props}
    >
      <path d="M19.95 21Q16.725 21 13.663 19.575Q10.6 18.15 8.238 15.775Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.8 3 3.525Q3 3.25 3.05 3H8.9L9.825 8.025L6.975 10.9Q8.025 12.7 9.613 14.275Q11.2 15.85 13.1 17L16 14.1L21 15.1V20.95Q20.75 20.975 20.475 20.988Q20.2 21 19.95 21ZM6.025 9 7.675 7.35 7.25 5H5.025Q5.15 6.025 5.375 7.025Q5.6 8.025 6.025 9ZM14.975 17.95Q15.95 18.375 16.963 18.625Q17.975 18.875 19 18.95V16.75L16.65 16.275ZM6.025 9Q6.025 9 6.025 9Q6.025 9 6.025 9ZM14.975 17.95Q14.975 17.95 14.975 17.95Q14.975 17.95 14.975 17.95Z"/>
    </Icon>
  );
});

IconMaterialCallSharp.displayName = 'AmauiIconMaterialCallSharp';

export default IconMaterialCallSharp;
