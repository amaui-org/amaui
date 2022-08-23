import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSummarizeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SummarizeRoundedFilled'
      short_name='Summarize'

      {...props}
    >
      <path d="M8 9Q8.425 9 8.713 8.712Q9 8.425 9 8Q9 7.575 8.713 7.287Q8.425 7 8 7Q7.575 7 7.287 7.287Q7 7.575 7 8Q7 8.425 7.287 8.712Q7.575 9 8 9ZM8 13Q8.425 13 8.713 12.712Q9 12.425 9 12Q9 11.575 8.713 11.287Q8.425 11 8 11Q7.575 11 7.287 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13ZM8 17Q8.425 17 8.713 16.712Q9 16.425 9 16Q9 15.575 8.713 15.287Q8.425 15 8 15Q7.575 15 7.287 15.287Q7 15.575 7 16Q7 16.425 7.287 16.712Q7.575 17 8 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H15.175Q15.575 3 15.938 3.15Q16.3 3.3 16.575 3.575L20.425 7.425Q20.7 7.7 20.85 8.062Q21 8.425 21 8.825V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM16 9H19L15 5V8Q15 8.425 15.288 8.712Q15.575 9 16 9Z"/>
    </Icon>
  );
});

IconMaterialSummarizeRoundedFilled.displayName = 'AmauiIconMaterialSummarizeRoundedFilled';

export default IconMaterialSummarizeRoundedFilled;
