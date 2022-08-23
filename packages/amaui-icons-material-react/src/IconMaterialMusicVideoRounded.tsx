import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicVideoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoRounded'
      short_name='MusicVideo'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM10.5 17Q11.55 17 12.275 16.275Q13 15.55 13 14.5V9H15Q15.425 9 15.713 8.712Q16 8.425 16 8Q16 7.575 15.713 7.287Q15.425 7 15 7H13Q12.575 7 12.288 7.287Q12 7.575 12 8V12.5Q11.675 12.275 11.3 12.137Q10.925 12 10.5 12Q9.45 12 8.725 12.725Q8 13.45 8 14.5Q8 15.55 8.725 16.275Q9.45 17 10.5 17Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoRounded.displayName = 'AmauiIconMaterialMusicVideoRounded';

export default IconMaterialMusicVideoRounded;
