import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsSystemDaydream = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSystemDaydream'

      short_name='SettingsSystemDaydream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16h6.5q1.05 0 1.775-.725Q18 14.55 18 13.5q0-1.05-.725-1.775Q16.55 11 15.5 11h-.05q-.2-1.275-1.112-2.137Q13.425 8 12.15 8q-1.05 0-1.95.525Q9.3 9.05 8.85 10h-.125q-1.175 0-1.95.9Q6 11.8 6 13q0 1.25.875 2.125T9 16Zm-5 4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm5-4q-.425 0-.712-.288Q8 13.425 8 13t.288-.713Q8.575 12 9 12h1.25v-.25q0-.725.512-1.238Q11.275 10 12 10t1.238.512q.512.513.512 1.238V13h1.75q.2 0 .35.15.15.15.15.35 0 .2-.15.35-.15.15-.35.15Zm3-2Z"/>
    </Icon>
  );
});

IconMaterialSettingsSystemDaydream.displayName = 'AmauiIconMaterialSettingsSystemDaydream';

export default IconMaterialSettingsSystemDaydream;
