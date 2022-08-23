import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMosqueSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueSharpFilled'
      short_name='Mosque'

      {...props}
    >
      <path d="M6.125 8.05Q5.95 8.05 5.975 7.725Q6 7.4 6 7.1Q6 6.1 6.475 5.25Q6.95 4.4 7.75 3.85L12 1L16.25 3.85Q17.05 4.4 17.525 5.25Q18 6.1 18 7.1Q18 7.4 18.025 7.725Q18.05 8.05 17.875 8.05ZM1 21V8.725Q0.55 8.45 0.275 8.012Q0 7.575 0 7Q0 6.425 0.6 5.6Q1.2 4.775 2 4Q2.8 4.775 3.4 5.6Q4 6.425 4 7Q4 7.575 3.725 8.012Q3.45 8.45 3 8.725V13H5V9.05H19V13H21V8.725Q20.55 8.45 20.275 8.012Q20 7.575 20 7Q20 6.425 20.6 5.6Q21.2 4.775 22 4Q22.8 4.775 23.4 5.6Q24 6.425 24 7Q24 7.575 23.725 8.012Q23.45 8.45 23 8.725V21H14V15H10V21Z"/>
    </Icon>
  );
});

IconMaterialMosqueSharpFilled.displayName = 'AmauiIconMaterialMosqueSharpFilled';

export default IconMaterialMosqueSharpFilled;
