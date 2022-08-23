import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlurShortSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurShortSharpFilled'
      short_name='BlurShort'

      {...props}
    >
      <path d="M15 15Q16.25 15 17.125 14.125Q18 13.25 18 12Q18 10.75 17.125 9.875Q16.25 9 15 9Q13.75 9 12.875 9.875Q12 10.75 12 12Q12 13.25 12.875 14.125Q13.75 15 15 15ZM15 17Q13.175 17 11.812 15.863Q10.45 14.725 10.1 13H7Q6.575 13 6.287 12.712Q6 12.425 6 12Q6 11.575 6.287 11.287Q6.575 11 7 11H10.1Q10.225 10.425 10.438 9.925Q10.65 9.425 11 9H5Q4.575 9 4.287 8.712Q4 8.425 4 8Q4 7.575 4.287 7.287Q4.575 7 5 7H15Q17.075 7 18.538 8.462Q20 9.925 20 12Q20 14.075 18.538 15.537Q17.075 17 15 17Z"/>
    </Icon>
  );
});

IconMaterialBlurShortSharpFilled.displayName = 'AmauiIconMaterialBlurShortSharpFilled';

export default IconMaterialBlurShortSharpFilled;
