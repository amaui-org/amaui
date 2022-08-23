import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorAlarmSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorAlarmSharpW100Filled'
      short_name='DetectorAlarm'

      {...props}
    >
      <path d="M11.65 19.7V16h.7v3.7Zm7.425-3.075-2.625-2.6.5-.5 2.6 2.625Zm-14.15 0-.475-.475 2.6-2.625.5.5ZM8.65 10.25h6.7q.25 0 .45-.137.2-.138.3-.388l.55-1.475h-9.3l.55 1.475q.1.25.3.388.2.137.45.137Zm0 .7q-.475 0-.862-.262-.388-.263-.563-.713L6.6 8.25h-.8q-.625 0-1.062-.438Q4.3 7.375 4.3 6.75v-1.9h15.4v1.9q0 .625-.437 1.062-.438.438-1.063.438h-.8l-.675 1.725q-.175.425-.55.7-.375.275-.85.275Z"/>
    </Icon>
  );
});

IconMaterialDetectorAlarmSharpW100Filled.displayName = 'AmauiIconMaterialDetectorAlarmSharpW100Filled';

export default IconMaterialDetectorAlarmSharpW100Filled;
