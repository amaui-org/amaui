import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudCircle'

      short_name='CloudCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 16H16q1.25 0 2.125-.875T19 13q0-1.25-.875-2.125T16 10q-.2-1.45-1.325-2.475Q13.55 6.5 12.15 6.5q-1.275 0-2.312.65Q8.8 7.8 8.3 9q-1.425.125-2.362 1.087Q5 11.05 5 12.5q0 1.45 1.025 2.475Q7.05 16 8.5 16Zm3.5 6q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm-3.5-6q-.625 0-1.062-.438Q7 13.125 7 12.5t.438-1.062Q7.875 11 8.5 11H10v-.5q0-.825.588-1.413Q11.175 8.5 12 8.5t1.413.587Q14 9.675 14 10.5V12h2q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 14 16 14Zm3.5-2Z"/>
    </Icon>
  );
});

IconMaterialCloudCircle.displayName = 'AmauiIconMaterialCloudCircle';

export default IconMaterialCloudCircle;
