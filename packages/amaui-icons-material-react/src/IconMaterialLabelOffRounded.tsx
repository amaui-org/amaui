import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffRounded'
      short_name='LabelOff'

      {...props}
    >
      <path d="M18.45 15.6 17 14.15 18.55 12 15 7Q15 7 15 7Q15 7 15 7H9.85L7.85 5H15Q15.5 5 15.925 5.213Q16.35 5.425 16.65 5.85L20.175 10.85Q20.525 11.375 20.525 12Q20.525 12.625 20.175 13.15ZM5 19Q4.175 19 3.587 18.413Q3 17.825 3 17V7Q3 6.725 3.062 6.5Q3.125 6.275 3.25 6.05L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9L15.95 18.75Q15.725 18.875 15.5 18.938Q15.275 19 15 19ZM9.575 12.4Q9.575 12.4 9.575 12.4Q9.575 12.4 9.575 12.4ZM13.425 10.575Q13.425 10.575 13.425 10.575Q13.425 10.575 13.425 10.575ZM14.2 17 5 7.8V17Q5 17 5 17Q5 17 5 17Z"/>
    </Icon>
  );
});

IconMaterialLabelOffRounded.displayName = 'AmauiIconMaterialLabelOffRounded';

export default IconMaterialLabelOffRounded;
