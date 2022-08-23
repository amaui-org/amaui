import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSharpW100'
      short_name='Call'

      {...props}
    >
      <path d="M18.625 19.55Q16.2 19.575 13.662 18.275Q11.125 16.975 9.05 14.913Q6.975 12.85 5.663 10.312Q4.35 7.775 4.35 5.35Q4.35 5.1 4.363 4.825Q4.375 4.55 4.425 4.3H8.375L9.2 8.075L6.55 10.5Q7.95 12.85 9.675 14.55Q11.4 16.25 13.75 17.55L16.3 14.875L19.65 15.575V19.475Q19.425 19.525 19.138 19.538Q18.85 19.55 18.625 19.55ZM6.2 9.85 8.425 7.85 7.8 5H5.075Q4.975 6.2 5.338 7.475Q5.7 8.75 6.2 9.85ZM14.4 17.85Q15.275 18.3 16.625 18.625Q17.975 18.95 18.95 18.825V16.125L16.55 15.65ZM6.2 9.85Q6.2 9.85 6.2 9.85Q6.2 9.85 6.2 9.85ZM14.4 17.85Q14.4 17.85 14.4 17.85Q14.4 17.85 14.4 17.85Z"/>
    </Icon>
  );
});

IconMaterialCallSharpW100.displayName = 'AmauiIconMaterialCallSharpW100';

export default IconMaterialCallSharpW100;
