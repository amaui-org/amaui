import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsAccessibility = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccessibility'

      short_name='SettingsAccessibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 4q-.825 0-1.412-.588Q10 2.825 10 2t.588-1.413Q11.175 0 12 0t1.413.587Q14 1.175 14 2q0 .825-.587 1.412Q12.825 4 12 4ZM9 19V7q-1.5-.125-3.05-.375Q4.4 6.375 3 6l.5-2q1.95.525 4.15.762Q9.85 5 12 5q2.15 0 4.35-.238 2.2-.237 4.15-.762l.5 2q-1.4.375-2.95.625Q16.5 6.875 15 7v12h-2v-6h-2v6Zm-1 5q-.425 0-.713-.288Q7 23.425 7 23t.287-.712Q7.575 22 8 22t.713.288Q9 22.575 9 23t-.287.712Q8.425 24 8 24Zm4 0q-.425 0-.712-.288Q11 23.425 11 23t.288-.712Q11.575 22 12 22t.713.288Q13 22.575 13 23t-.287.712Q12.425 24 12 24Zm4 0q-.425 0-.712-.288Q15 23.425 15 23t.288-.712Q15.575 22 16 22t.712.288Q17 22.575 17 23t-.288.712Q16.425 24 16 24Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccessibility.displayName = 'AmauiIconMaterialSettingsAccessibility';

export default IconMaterialSettingsAccessibility;
