import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatAlignRightRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRightRounded'
      short_name='FormatAlignRight'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM10 17Q9.575 17 9.288 16.712Q9 16.425 9 16Q9 15.575 9.288 15.287Q9.575 15 10 15H20Q20.425 15 20.712 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11H20Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13ZM10 9Q9.575 9 9.288 8.712Q9 8.425 9 8Q9 7.575 9.288 7.287Q9.575 7 10 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9ZM4 5Q3.575 5 3.288 4.712Q3 4.425 3 4Q3 3.575 3.288 3.287Q3.575 3 4 3H20Q20.425 3 20.712 3.287Q21 3.575 21 4Q21 4.425 20.712 4.712Q20.425 5 20 5Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRightRounded.displayName = 'AmauiIconMaterialFormatAlignRightRounded';

export default IconMaterialFormatAlignRightRounded;
