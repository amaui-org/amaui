import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialE911AvatarRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911AvatarRoundedFilled'
      short_name='E911Avatar'

      {...props}
    >
      <path d="M17 7Q16.575 7 16.288 6.713Q16 6.425 16 6V3Q16 2.575 16.288 2.287Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V6Q18 6.425 17.712 6.713Q17.425 7 17 7ZM17 11Q16.575 11 16.288 10.712Q16 10.425 16 10Q16 9.575 16.288 9.287Q16.575 9 17 9Q17.425 9 17.712 9.287Q18 9.575 18 10Q18 10.425 17.712 10.712Q17.425 11 17 11ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialE911AvatarRoundedFilled.displayName = 'AmauiIconMaterialE911AvatarRoundedFilled';

export default IconMaterialE911AvatarRoundedFilled;
