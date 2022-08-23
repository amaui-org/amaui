import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTocSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TocSharp'
      short_name='Toc'

      {...props}
    >
      <path d="M3 9V7H17V9ZM3 13V11H17V13ZM3 17V15H17V17ZM20 17Q19.575 17 19.288 16.712Q19 16.425 19 16Q19 15.575 19.288 15.287Q19.575 15 20 15Q20.425 15 20.712 15.287Q21 15.575 21 16Q21 16.425 20.712 16.712Q20.425 17 20 17ZM20 9Q19.575 9 19.288 8.712Q19 8.425 19 8Q19 7.575 19.288 7.287Q19.575 7 20 7Q20.425 7 20.712 7.287Q21 7.575 21 8Q21 8.425 20.712 8.712Q20.425 9 20 9ZM20 13Q19.575 13 19.288 12.712Q19 12.425 19 12Q19 11.575 19.288 11.287Q19.575 11 20 11Q20.425 11 20.712 11.287Q21 11.575 21 12Q21 12.425 20.712 12.712Q20.425 13 20 13Z"/>
    </Icon>
  );
});

IconMaterialTocSharp.displayName = 'AmauiIconMaterialTocSharp';

export default IconMaterialTocSharp;
