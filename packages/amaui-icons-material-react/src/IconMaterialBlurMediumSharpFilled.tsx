import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlurMediumSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlurMediumSharpFilled'
      short_name='BlurMedium'

      {...props}
    >
      <path d="M8 17Q7.575 17 7.287 16.712Q7 16.425 7 16Q7 15.575 7.287 15.287Q7.575 15 8 15H11Q10.65 14.575 10.438 14.075Q10.225 13.575 10.1 13H5.5Q5.075 13 4.787 12.712Q4.5 12.425 4.5 12Q4.5 11.575 4.787 11.287Q5.075 11 5.5 11H10.1Q10.225 10.425 10.438 9.925Q10.65 9.425 11 9H5Q4.575 9 4.287 8.712Q4 8.425 4 8Q4 7.575 4.287 7.287Q4.575 7 5 7H15Q17.075 7 18.538 8.462Q20 9.925 20 12Q20 14.075 18.538 15.537Q17.075 17 15 17ZM15 15Q16.25 15 17.125 14.125Q18 13.25 18 12Q18 10.75 17.125 9.875Q16.25 9 15 9Q13.75 9 12.875 9.875Q12 10.75 12 12Q12 13.25 12.875 14.125Q13.75 15 15 15ZM5 17Q4.575 17 4.287 16.712Q4 16.425 4 16Q4 15.575 4.287 15.287Q4.575 15 5 15Q5.425 15 5.713 15.287Q6 15.575 6 16Q6 16.425 5.713 16.712Q5.425 17 5 17Z"/>
    </Icon>
  );
});

IconMaterialBlurMediumSharpFilled.displayName = 'AmauiIconMaterialBlurMediumSharpFilled';

export default IconMaterialBlurMediumSharpFilled;
