import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSummarizeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SummarizeSharp'
      short_name='Summarize'

      {...props}
    >
      <path d="M3 21V3H16L21 8V21ZM5 19H19V9H15V5H5ZM8 9Q8.425 9 8.713 8.712Q9 8.425 9 8Q9 7.575 8.713 7.287Q8.425 7 8 7Q7.575 7 7.287 7.287Q7 7.575 7 8Q7 8.425 7.287 8.712Q7.575 9 8 9ZM8 13Q8.425 13 8.713 12.712Q9 12.425 9 12Q9 11.575 8.713 11.287Q8.425 11 8 11Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13ZM8 17Q8.425 17 8.713 16.712Q9 16.425 9 16Q9 15.575 8.713 15.287Q8.425 15 8 15Q7.575 15 7.287 15.287Q7 15.575 7 16Q7 16.425 7.287 16.712Q7.575 17 8 17ZM5 5V9V5V9V19Z"/>
    </Icon>
  );
});

IconMaterialSummarizeSharp.displayName = 'AmauiIconMaterialSummarizeSharp';

export default IconMaterialSummarizeSharp;
