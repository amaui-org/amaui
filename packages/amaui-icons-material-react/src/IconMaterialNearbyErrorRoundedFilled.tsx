import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearbyErrorRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyErrorRoundedFilled'
      short_name='NearbyError'

      {...props}
    >
      <path d="M21 18Q20.575 18 20.288 17.712Q20 17.425 20 17V11Q20 10.575 20.288 10.287Q20.575 10 21 10Q21.425 10 21.712 10.287Q22 10.575 22 11V17Q22 17.425 21.712 17.712Q21.425 18 21 18ZM21 22Q20.575 22 20.288 21.712Q20 21.425 20 21Q20 20.575 20.288 20.288Q20.575 20 21 20Q21.425 20 21.712 20.288Q22 20.575 22 21Q22 21.425 21.712 21.712Q21.425 22 21 22ZM10.6 21.4 2.6 13.4Q2 12.8 2 12Q2 11.2 2.6 10.6L10.6 2.6Q11.2 2 12 2Q12.8 2 13.4 2.6L18 7.2V10.8L12 4.8Q12 4.8 12 4.8Q12 4.8 12 4.8L4.8 12Q4.8 12 4.8 12Q4.8 12 4.8 12L12 19.2Q12 19.2 12 19.2Q12 19.2 12 19.2L18 13.2V16.8L13.4 21.4Q12.8 22 12 22Q11.2 22 10.6 21.4ZM11.3 15.7 8.3 12.7Q8 12.4 8 12Q8 11.6 8.3 11.3L11.3 8.3Q11.6 8 12 8Q12.4 8 12.7 8.3L15.7 11.3Q16 11.6 16 12Q16 12.4 15.7 12.7L12.7 15.7Q12.4 16 12 16Q11.6 16 11.3 15.7Z"/>
    </Icon>
  );
});

IconMaterialNearbyErrorRoundedFilled.displayName = 'AmauiIconMaterialNearbyErrorRoundedFilled';

export default IconMaterialNearbyErrorRoundedFilled;
