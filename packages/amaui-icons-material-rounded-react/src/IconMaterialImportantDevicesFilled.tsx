import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImportantDevicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportantDevicesFilled'

      short_name='ImportantDevices'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 21q-.425 0-.712-.288Q16 20.425 16 20v-8q0-.425.288-.713Q16.575 11 17 11h4q.425 0 .712.287.288.288.288.713v8q0 .425-.288.712Q21.425 21 21 21Zm0-2h4v-6h-4Zm-8 2q-.425 0-.712-.288Q8 20.425 8 20t.288-.712Q8.575 19 9 19h1v-2H4q-.825 0-1.412-.587Q2 15.825 2 15V5q0-.825.588-1.413Q3.175 3 4 3h14q.825 0 1.413.587Q20 4.175 20 5v5h-3q-.825 0-1.412.587Q15 11.175 15 12v5h-3v2h1q.425 0 .713.288.287.287.287.712t-.287.712Q13.425 21 13 21Zm.925-8.175L11 12l1.075.825q.275.225.588.012.312-.212.187-.562l-.4-1.375 1.2-.95q.275-.225.15-.563-.125-.337-.475-.337H11.9l-.425-1.325q-.05-.175-.187-.262-.138-.088-.288-.088-.15 0-.287.088-.138.087-.188.262L10.1 9.05H8.675q-.35 0-.475.337-.125.338.15.563l1.2.95-.4 1.375q-.125.35.188.562.312.213.587-.012Z"/>
    </Icon>
  );
});

IconMaterialImportantDevicesFilled.displayName = 'AmauiIconMaterialImportantDevicesFilled';

export default IconMaterialImportantDevicesFilled;
