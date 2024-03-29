import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExtension = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Extension'

      short_name='Extension'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.8 21H5q-.825 0-1.413-.587Q3 19.825 3 19v-3.8q1.2 0 2.1-.762.9-.763.9-1.938 0-1.175-.9-1.938Q4.2 9.8 3 9.8V6q0-.825.587-1.412Q4.175 4 5 4h4q0-1.05.725-1.775Q10.45 1.5 11.5 1.5q1.05 0 1.775.725Q14 2.95 14 4h4q.825 0 1.413.588Q20 5.175 20 6v4q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q21.05 15 20 15v4q0 .825-.587 1.413Q18.825 21 18 21h-3.8q0-1.25-.787-2.125Q12.625 18 11.5 18t-1.912.875Q8.8 19.75 8.8 21ZM5 19h2.125q.6-1.65 1.925-2.325Q10.375 16 11.5 16q1.125 0 2.45.675 1.325.675 1.925 2.325H18v-6h2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q20.2 12 20 12h-2V6h-6V4q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15Q11 3.8 11 4v2H5v2.2q1.35.5 2.175 1.675Q8 11.05 8 12.5q0 1.425-.825 2.6T5 16.8Zm7.75-7.75Z"/>
    </Icon>
  );
});

IconMaterialExtension.displayName = 'AmauiIconMaterialExtension';

export default IconMaterialExtension;
