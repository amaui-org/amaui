import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSavingsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavingsSharpFilled'
      short_name='Savings'

      {...props}
    >
      <path d="M16 11Q16.425 11 16.712 10.712Q17 10.425 17 10Q17 9.575 16.712 9.287Q16.425 9 16 9Q15.575 9 15.288 9.287Q15 9.575 15 10Q15 10.425 15.288 10.712Q15.575 11 16 11ZM8 9H13V7H8ZM4.5 21Q3.75 18.525 3.275 16.75Q2.8 14.975 2.513 13.662Q2.225 12.35 2.112 11.375Q2 10.4 2 9.5Q2 7.2 3.6 5.6Q5.2 4 7.5 4H12.5Q13.175 3.1 14.213 2.55Q15.25 2 16.5 2Q17.125 2 17.562 2.438Q18 2.875 18 3.5Q18 3.65 17.962 3.8Q17.925 3.95 17.875 4.075Q17.775 4.35 17.688 4.625Q17.6 4.9 17.55 5.225L19.825 7.5H22V14.475L19.175 15.4L17.5 21H12V19H10V21Z"/>
    </Icon>
  );
});

IconMaterialSavingsSharpFilled.displayName = 'AmauiIconMaterialSavingsSharpFilled';

export default IconMaterialSavingsSharpFilled;
