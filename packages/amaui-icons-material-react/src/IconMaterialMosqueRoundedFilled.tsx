import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMosqueRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueRoundedFilled'
      short_name='Mosque'

      {...props}
    >
      <path d="M6.95 8.05Q6.425 8.05 6.213 7.837Q6 7.625 6 7.1Q6 6.1 6.475 5.25Q6.95 4.4 7.75 3.85L12 1L16.25 3.85Q17.05 4.4 17.525 5.25Q18 6.1 18 7.1Q18 7.625 17.788 7.837Q17.575 8.05 17.05 8.05ZM1 21V8.725Q0.55 8.45 0.275 8.012Q0 7.575 0 7Q0 6.425 0.6 5.6Q1.2 4.775 2 4Q2.8 4.775 3.4 5.6Q4 6.425 4 7Q4 7.575 3.725 8.012Q3.45 8.45 3 8.725V13H5V11Q5 10.375 5.4 9.8Q5.8 9.225 6.55 9.05H17.45Q18.2 9.225 18.6 9.8Q19 10.375 19 11V13H21V8.725Q20.55 8.45 20.275 8.012Q20 7.575 20 7Q20 6.425 20.6 5.6Q21.2 4.775 22 4Q22.8 4.775 23.4 5.6Q24 6.425 24 7Q24 7.575 23.725 8.012Q23.45 8.45 23 8.725V21H14V17Q14 16.175 13.413 15.588Q12.825 15 12 15Q11.175 15 10.588 15.588Q10 16.175 10 17V21Z"/>
    </Icon>
  );
});

IconMaterialMosqueRoundedFilled.displayName = 'AmauiIconMaterialMosqueRoundedFilled';

export default IconMaterialMosqueRoundedFilled;
