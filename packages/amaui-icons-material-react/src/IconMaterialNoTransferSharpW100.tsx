import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoTransferSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferSharpW100'
      short_name='NoTransfer'

      {...props}
    >
      <path d="M21.3 22.3 17 18V19.7H16.3V17.7H7.7V19.7H7V17.5Q6.5 17.375 5.9 16.663Q5.3 15.95 5.3 15V6.3L2.25 3.25L2.75 2.75L21.8 21.8ZM8 17H16L11 12H6V15Q6 15.825 6.588 16.413Q7.175 17 8 17ZM18.575 15.775 18 15.2V12H14.8L14.1 11.3H18V6.4H9.2L8.5 5.7H18Q17.775 4.825 16.4 4.412Q15.025 4 12 4Q10.325 4 9.188 4.125Q8.05 4.25 7.325 4.525L6.8 4Q7.625 3.65 8.913 3.475Q10.2 3.3 12 3.3Q15.6 3.3 17.15 3.925Q18.7 4.55 18.7 6V15Q18.7 15.2 18.663 15.387Q18.625 15.575 18.575 15.775ZM8.5 15.5Q8.925 15.5 9.213 15.212Q9.5 14.925 9.5 14.5Q9.5 14.075 9.213 13.787Q8.925 13.5 8.5 13.5Q8.075 13.5 7.788 13.787Q7.5 14.075 7.5 14.5Q7.5 14.925 7.788 15.212Q8.075 15.5 8.5 15.5ZM6 11.3H10.3L6 7ZM8.5 5.7Q8.325 5.7 9.325 5.7Q10.325 5.7 12 5.7Q15.025 5.7 16.4 5.7Q17.775 5.7 18 5.7ZM11 12Q11 12 11 12Q11 12 11 12ZM14.8 12Z"/>
    </Icon>
  );
});

IconMaterialNoTransferSharpW100.displayName = 'AmauiIconMaterialNoTransferSharpW100';

export default IconMaterialNoTransferSharpW100;
