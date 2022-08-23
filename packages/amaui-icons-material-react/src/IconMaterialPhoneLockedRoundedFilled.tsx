import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneLockedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneLockedRoundedFilled'
      short_name='PhoneLocked'

      {...props}
    >
      <path d="M16 10Q15.575 10 15.288 9.712Q15 9.425 15 9V6Q15 5.575 15.288 5.287Q15.575 5 16 5V4Q16 3.175 16.587 2.587Q17.175 2 18 2Q18.825 2 19.413 2.587Q20 3.175 20 4V5Q20.425 5 20.712 5.287Q21 5.575 21 6V9Q21 9.425 20.712 9.712Q20.425 10 20 10ZM17 5H19V4Q19 3.575 18.712 3.287Q18.425 3 18 3Q17.575 3 17.288 3.287Q17 3.575 17 4ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneLockedRoundedFilled.displayName = 'AmauiIconMaterialPhoneLockedRoundedFilled';

export default IconMaterialPhoneLockedRoundedFilled;
