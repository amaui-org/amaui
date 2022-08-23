import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialListSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListSharp'
      short_name='List'

      {...props}
    >
      <path d="M7 9V7H21V9ZM7 13V11H21V13ZM7 17V15H21V17ZM4 9Q3.575 9 3.288 8.712Q3 8.425 3 8Q3 7.575 3.288 7.287Q3.575 7 4 7Q4.425 7 4.713 7.287Q5 7.575 5 8Q5 8.425 4.713 8.712Q4.425 9 4 9ZM4 13Q3.575 13 3.288 12.712Q3 12.425 3 12Q3 11.575 3.288 11.287Q3.575 11 4 11Q4.425 11 4.713 11.287Q5 11.575 5 12Q5 12.425 4.713 12.712Q4.425 13 4 13ZM4 17Q3.575 17 3.288 16.712Q3 16.425 3 16Q3 15.575 3.288 15.287Q3.575 15 4 15Q4.425 15 4.713 15.287Q5 15.575 5 16Q5 16.425 4.713 16.712Q4.425 17 4 17Z"/>
    </Icon>
  );
});

IconMaterialListSharp.displayName = 'AmauiIconMaterialListSharp';

export default IconMaterialListSharp;
