import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAmpStoriesRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesRounded'
      short_name='AmpStories'

      {...props}
    >
      <path d="M8 20Q7.575 20 7.287 19.712Q7 19.425 7 19V5Q7 4.575 7.287 4.287Q7.575 4 8 4H16Q16.425 4 16.712 4.287Q17 4.575 17 5V19Q17 19.425 16.712 19.712Q16.425 20 16 20ZM3 17V6.975Q3 6.55 3.288 6.275Q3.575 6 4 6Q4.425 6 4.713 6.287Q5 6.575 5 7V17.025Q5 17.45 4.713 17.725Q4.425 18 4 18Q3.575 18 3.288 17.712Q3 17.425 3 17ZM19 17V6.975Q19 6.55 19.288 6.275Q19.575 6 20 6Q20.425 6 20.712 6.287Q21 6.575 21 7V17.025Q21 17.45 20.712 17.725Q20.425 18 20 18Q19.575 18 19.288 17.712Q19 17.425 19 17ZM9 18H15V6H9ZM9 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialAmpStoriesRounded.displayName = 'AmauiIconMaterialAmpStoriesRounded';

export default IconMaterialAmpStoriesRounded;
