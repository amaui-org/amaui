import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneCallbackRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneCallbackRoundedFilled'
      short_name='PhoneCallback'

      {...props}
    >
      <path d="M13.8 11Q13.375 11 13.088 10.712Q12.8 10.425 12.8 10V6Q12.8 5.575 13.088 5.287Q13.375 5 13.8 5Q14.225 5 14.513 5.287Q14.8 5.575 14.8 6V7.6L19.1 3.3Q19.375 3.025 19.8 3.025Q20.225 3.025 20.5 3.3Q20.775 3.575 20.775 4Q20.775 4.425 20.5 4.7L16.2 9H17.8Q18.225 9 18.513 9.287Q18.8 9.575 18.8 10Q18.8 10.425 18.513 10.712Q18.225 11 17.8 11ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneCallbackRoundedFilled.displayName = 'AmauiIconMaterialPhoneCallbackRoundedFilled';

export default IconMaterialPhoneCallbackRoundedFilled;
