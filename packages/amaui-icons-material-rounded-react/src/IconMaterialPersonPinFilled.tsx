import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonPinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinFilled'

      short_name='PersonPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.575q-.2 0-.375-.063-.175-.062-.325-.212L9 20H5q-.825 0-1.413-.587Q3 18.825 3 18V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v14q0 .825-.587 1.413Q19.825 20 19 20h-4l-2.3 2.3q-.15.15-.325.212-.175.063-.375.063ZM12 12q1.45 0 2.475-1.025Q15.5 9.95 15.5 8.5q0-1.45-1.025-2.475Q13.45 5 12 5q-1.45 0-2.475 1.025Q8.5 7.05 8.5 8.5q0 1.45 1.025 2.475Q10.55 12 12 12Zm0 8.2 2.2-2.2H19v-1.15q-1.35-1.325-3.137-2.088Q14.075 14 12 14t-3.862.762Q6.35 15.525 5 16.85V18h4.8Z"/>
    </Icon>
  );
});

IconMaterialPersonPinFilled.displayName = 'AmauiIconMaterialPersonPinFilled';

export default IconMaterialPersonPinFilled;
