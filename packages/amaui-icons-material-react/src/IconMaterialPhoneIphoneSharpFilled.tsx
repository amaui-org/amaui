import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneIphoneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneSharpFilled'
      short_name='PhoneIphone'

      {...props}
    >
      <path d="M12 20.5Q12.425 20.5 12.713 20.212Q13 19.925 13 19.5Q13 19.075 12.713 18.788Q12.425 18.5 12 18.5Q11.575 18.5 11.288 18.788Q11 19.075 11 19.5Q11 19.925 11.288 20.212Q11.575 20.5 12 20.5ZM5 23V1H19V23ZM7 16H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneSharpFilled.displayName = 'AmauiIconMaterialPhoneIphoneSharpFilled';

export default IconMaterialPhoneIphoneSharpFilled;
