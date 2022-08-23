import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignLeftRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeftRounded'
      short_name='FormatAlignLeft'

      {...props}
    >
      <path d="M4 17Q3.575 17 3.288 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15H14Q14.425 15 14.713 15.287Q15 15.575 15 16Q15 16.425 14.713 16.712Q14.425 17 14 17ZM4 9Q3.575 9 3.288 8.712Q3 8.425 3 8Q3 7.575 3.288 7.287Q3.575 7 4 7H14Q14.425 7 14.713 7.287Q15 7.575 15 8Q15 8.425 14.713 8.712Q14.425 9 14 9ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignLeftRounded.displayName = 'AmauiIconMaterialFormatAlignLeftRounded';

export default IconMaterialFormatAlignLeftRounded;
