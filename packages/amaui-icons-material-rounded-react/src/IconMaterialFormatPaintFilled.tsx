import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatPaintFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintFilled'

      short_name='FormatPaint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22q-.825 0-1.412-.587Q9 20.825 9 20v-4H6q-.825 0-1.412-.588Q4 14.825 4 14V7q0-1.65 1.175-2.825Q6.35 3 8 3h12v11q0 .825-.587 1.412Q18.825 16 18 16h-3v4q0 .825-.587 1.413Q13.825 22 13 22ZM6 10h12V5h-1v3q0 .425-.288.712Q16.425 9 16 9t-.712-.288Q15 8.425 15 8V5h-1v1q0 .425-.287.713Q13.425 7 13 7t-.712-.287Q12 6.425 12 6V5H8q-.825 0-1.412.588Q6 6.175 6 7Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintFilled.displayName = 'AmauiIconMaterialFormatPaintFilled';

export default IconMaterialFormatPaintFilled;
