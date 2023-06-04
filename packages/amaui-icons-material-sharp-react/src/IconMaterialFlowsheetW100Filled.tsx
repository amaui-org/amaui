import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlowsheetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlowsheetW100Filled'

      short_name='Flowsheet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 10.35H12v-.7H6.65ZM3.3 18.7V5.3h17.375v1.55q-.175-.025-.338-.038Q20.175 6.8 20 6.8q-1.725 0-2.912 1.187Q15.9 9.175 15.9 10.9q0 .4.075.775t.2.725H12.4v1.25H6.65v.7h5.75v.9q-.85.6-1.3 1.5-.45.9-.45 1.95ZM14.75 20q.575 0 .988-.413.412-.412.412-.987t-.412-.988q-.413-.412-.988-.412t-.987.412q-.413.413-.413.988t.413.987q.412.413.987.413ZM20 12.3q.575 0 .988-.413.412-.412.412-.987t-.412-.988Q20.575 9.5 20 9.5t-.987.412q-.413.413-.413.988t.413.987q.412.413.987.413Zm-5.25 8.4q-.875 0-1.488-.613-.612-.612-.612-1.487 0-.8.5-1.375t1.25-.7V14.4h5.25v-1.425q-.75-.125-1.25-.7t-.5-1.375q0-.875.613-1.488Q19.125 8.8 20 8.8q.875 0 1.488.612.612.613.612 1.488 0 .8-.5 1.375t-1.25.7V15.1H15.1v1.425q.75.125 1.25.7t.5 1.375q0 .875-.612 1.487-.613.613-1.488.613Z"/>
    </Icon>
  );
});

IconMaterialFlowsheetW100Filled.displayName = 'AmauiIconMaterialFlowsheetW100Filled';

export default IconMaterialFlowsheetW100Filled;
