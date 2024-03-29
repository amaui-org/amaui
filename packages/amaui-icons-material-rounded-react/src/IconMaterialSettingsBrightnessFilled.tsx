import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessFilled'

      short_name='SettingsBrightness'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.5 16 .8.8q.275.275.7.275.425 0 .7-.275l.8-.8H15q.425 0 .713-.288Q16 15.425 16 15v-1.5l.8-.8q.275-.275.275-.7 0-.425-.275-.7l-.8-.8V9q0-.425-.287-.713Q15.425 8 15 8h-1.5l-.8-.8q-.275-.275-.7-.275-.425 0-.7.275l-.8.8H9q-.425 0-.712.287Q8 8.575 8 9v1.5l-.8.8q-.275.275-.275.7 0 .425.275.7l.8.8V15q0 .425.288.712Q8.575 16 9 16Zm1.5-1V9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15Zm-8 5q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessFilled.displayName = 'AmauiIconMaterialSettingsBrightnessFilled';

export default IconMaterialSettingsBrightnessFilled;
