import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInBrowserFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserFilled'

      short_name='OpenInBrowser'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.425 0-.712-.288Q11 20.425 11 20v-5.15l-.9.9q-.275.275-.687.275-.413 0-.713-.3T8.413 15q.012-.425.312-.725L11.3 11.7q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.3.3.3.712 0 .413-.3.713t-.712.3q-.413 0-.713-.3L13 14.85V20q0 .425-.287.712Q12.425 21 12 21Zm-7 0q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21h-3q-.425 0-.712-.288Q15 20.425 15 20t.288-.712Q15.575 19 16 19h3V7H5v12h3q.425 0 .713.288Q9 19.575 9 20t-.287.712Q8.425 21 8 21Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowserFilled.displayName = 'AmauiIconMaterialOpenInBrowserFilled';

export default IconMaterialOpenInBrowserFilled;
