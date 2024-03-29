import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOff'

      short_name='FlashlightOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.5 21.9q-.275.275-.7.275-.425 0-.7-.275L16 18.8V20q0 .825-.587 1.413Q14.825 22 14 22h-4q-.825 0-1.412-.587Q8 20.825 8 20v-9.2L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7ZM10 12.8V20h4v-3.2Zm6 .35-2-2v-.75l2-3V7H9.85l-2-2H16V4H6.85l-.725-.725q.225-.575.725-.925Q7.35 2 8 2h8q.825 0 1.413.587Q18 3.175 18 4v4l-2 3Zm-4 1.65Zm0-5.65Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOff.displayName = 'AmauiIconMaterialFlashlightOff';

export default IconMaterialFlashlightOff;
