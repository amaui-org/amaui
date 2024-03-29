import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSummarize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Summarize'

      short_name='Summarize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 9q.425 0 .713-.288Q9 8.425 9 8t-.287-.713Q8.425 7 8 7t-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm0 4q.425 0 .713-.288Q9 12.425 9 12t-.287-.713Q8.425 11 8 11t-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm0 4q.425 0 .713-.288Q9 16.425 9 16t-.287-.713Q8.425 15 8 15t-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm-3 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h11l5 5v11q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V9h-3q-.425 0-.712-.288Q15 8.425 15 8V5H5v14ZM5 9v10V5v4-4 4Z"/>
    </Icon>
  );
});

IconMaterialSummarize.displayName = 'AmauiIconMaterialSummarize';

export default IconMaterialSummarize;
