import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlarmOnSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOnSharpW100Filled'
      short_name='AlarmOn'

      {...props}
    >
      <path d="M10.95 15.65 15.7 10.9 15.2 10.4 10.95 14.65 8.8 12.5 8.3 13ZM12 20.7Q10.4 20.7 9 20.1Q7.6 19.5 6.55 18.45Q5.5 17.4 4.9 16Q4.3 14.6 4.3 13Q4.3 11.4 4.9 10Q5.5 8.6 6.55 7.55Q7.6 6.5 9 5.9Q10.4 5.3 12 5.3Q13.6 5.3 15 5.9Q16.4 6.5 17.45 7.55Q18.5 8.6 19.1 10Q19.7 11.4 19.7 13Q19.7 14.6 19.1 16Q18.5 17.4 17.45 18.45Q16.4 19.5 15 20.1Q13.6 20.7 12 20.7ZM3.25 7.5 2.75 7 6 3.75 6.5 4.25ZM20.75 7.5 17.5 4.25 18 3.75 21.25 7Z"/>
    </Icon>
  );
});

IconMaterialAlarmOnSharpW100Filled.displayName = 'AmauiIconMaterialAlarmOnSharpW100Filled';

export default IconMaterialAlarmOnSharpW100Filled;
