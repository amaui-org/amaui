import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerifiedUserRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedUserRoundedW100Filled'
      short_name='VerifiedUser'

      {...props}
    >
      <path d="M10.95 13.65 9.05 11.75Q8.925 11.625 8.8 11.625Q8.675 11.625 8.55 11.75Q8.425 11.875 8.438 12.012Q8.45 12.15 8.55 12.25L10.425 14.125Q10.65 14.35 10.95 14.35Q11.25 14.35 11.475 14.125L15.45 10.15Q15.575 10.025 15.575 9.9Q15.575 9.775 15.45 9.65Q15.325 9.525 15.188 9.537Q15.05 9.55 14.95 9.65ZM12 20.575Q11.875 20.575 11.788 20.575Q11.7 20.575 11.625 20.525Q8.9 19.525 7.1 16.938Q5.3 14.35 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 14.35 16.9 16.938Q15.1 19.525 12.375 20.525Q12.275 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialVerifiedUserRoundedW100Filled.displayName = 'AmauiIconMaterialVerifiedUserRoundedW100Filled';

export default IconMaterialVerifiedUserRoundedW100Filled;
