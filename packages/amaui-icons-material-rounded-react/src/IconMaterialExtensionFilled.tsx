import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExtensionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionFilled'

      short_name='Extension'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.8 21H5q-.825 0-1.413-.587Q3 19.825 3 19v-3.8q1.2 0 2.1-.762.9-.763.9-1.938 0-1.175-.9-1.938Q4.2 9.8 3 9.8V6q0-.825.587-1.412Q4.175 4 5 4h4q0-1.05.725-1.775Q10.45 1.5 11.5 1.5q1.05 0 1.775.725Q14 2.95 14 4h4q.825 0 1.413.588Q20 5.175 20 6v4q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q21.05 15 20 15v4q0 .825-.587 1.413Q18.825 21 18 21h-3.8q0-1.25-.787-2.125Q12.625 18 11.5 18t-1.912.875Q8.8 19.75 8.8 21Z"/>
    </Icon>
  );
});

IconMaterialExtensionFilled.displayName = 'AmauiIconMaterialExtensionFilled';

export default IconMaterialExtensionFilled;
