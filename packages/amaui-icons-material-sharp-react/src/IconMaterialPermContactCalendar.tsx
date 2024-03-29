import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermContactCalendar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendar'

      short_name='PermContactCalendar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20h10v-.25q-1.05-.875-2.325-1.312Q13.4 18 12 18t-2.675.438Q8.05 18.875 7 19.75Zm-2-1.15q1.35-1.325 3.138-2.088Q9.925 16 12 16t3.863.762q1.787.763 3.137 2.088V6H5ZM12 14q-1.45 0-2.475-1.025Q8.5 11.95 8.5 10.5q0-1.45 1.025-2.475Q10.55 7 12 7q1.45 0 2.475 1.025Q15.5 9.05 15.5 10.5q0 1.45-1.025 2.475Q13.45 14 12 14Zm0-2q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 9 12 9t-1.062.438q-.438.437-.438 1.062t.438 1.062Q11.375 12 12 12ZM3 22V4h3V2h2v2h8V2h2v2h3v18Zm9-11.5ZM7 20h10Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendar.displayName = 'AmauiIconMaterialPermContactCalendar';

export default IconMaterialPermContactCalendar;
