import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonPin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPin'

      short_name='PersonPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.575q-.2 0-.375-.063-.175-.062-.325-.212L9 20H5q-.825 0-1.413-.587Q3 18.825 3 18V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v14q0 .825-.587 1.413Q19.825 20 19 20h-4l-2.3 2.3q-.15.15-.325.212-.175.063-.375.063ZM5 16.85q1.35-1.325 3.138-2.088Q9.925 14 12 14t3.863.762q1.787.763 3.137 2.088V4H5ZM12 12q1.45 0 2.475-1.025Q15.5 9.95 15.5 8.5q0-1.45-1.025-2.475Q13.45 5 12 5q-1.45 0-2.475 1.025Q8.5 7.05 8.5 8.5q0 1.45 1.025 2.475Q10.55 12 12 12Zm0-2q-.625 0-1.062-.438Q10.5 9.125 10.5 8.5t.438-1.062Q11.375 7 12 7t1.062.438q.438.437.438 1.062t-.438 1.062Q12.625 10 12 10Zm0 10.2 2.2-2.2H17v-.25q-1.05-.875-2.325-1.312Q13.4 16 12 16t-2.675.438Q8.05 16.875 7 17.75V18h2.8Zm0-9.775Z"/>
    </Icon>
  );
});

IconMaterialPersonPin.displayName = 'AmauiIconMaterialPersonPin';

export default IconMaterialPersonPin;
