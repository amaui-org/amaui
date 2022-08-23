import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExtensionRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionRoundedFilled'
      short_name='Extension'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V15.2Q4.2 15.2 5.1 14.438Q6 13.675 6 12.5Q6 11.325 5.1 10.562Q4.2 9.8 3 9.8V6Q3 5.175 3.587 4.588Q4.175 4 5 4H9Q9 2.95 9.725 2.225Q10.45 1.5 11.5 1.5Q12.55 1.5 13.275 2.225Q14 2.95 14 4H18Q18.825 4 19.413 4.588Q20 5.175 20 6V10Q21.05 10 21.775 10.725Q22.5 11.45 22.5 12.5Q22.5 13.55 21.775 14.275Q21.05 15 20 15V19Q20 19.825 19.413 20.413Q18.825 21 18 21H14.2Q14.2 19.8 13.438 18.9Q12.675 18 11.5 18Q10.325 18 9.562 18.9Q8.8 19.8 8.8 21Z"/>
    </Icon>
  );
});

IconMaterialExtensionRoundedFilled.displayName = 'AmauiIconMaterialExtensionRoundedFilled';

export default IconMaterialExtensionRoundedFilled;
