import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyRecordingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRecordingFilled'

      short_name='EmergencyRecording'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 13.725V16q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16v-2.275l2.15 1.225q.35.2.75.1t.6-.45q.2-.35.088-.763-.113-.412-.463-.612L12 12l2.125-1.225q.35-.2.463-.613.112-.412-.088-.762-.2-.35-.6-.45-.4-.1-.75.1L11 10.275V8q0-.425-.287-.713Q10.425 7 10 7t-.712.287Q9 7.575 9 8v2.275L6.85 9.05q-.35-.2-.75-.1t-.6.45q-.2.35-.087.762.112.413.462.613L8 12l-2.125 1.225q-.35.2-.462.612-.113.413.087.763.2.35.6.45.4.1.75-.1ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h12q.825 0 1.413.588Q18 5.175 18 6v4.5l3.15-3.15q.25-.25.55-.125.3.125.3.475v8.6q0 .35-.3.475t-.55-.125L18 13.5V18q0 .825-.587 1.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialEmergencyRecordingFilled.displayName = 'AmauiIconMaterialEmergencyRecordingFilled';

export default IconMaterialEmergencyRecordingFilled;
