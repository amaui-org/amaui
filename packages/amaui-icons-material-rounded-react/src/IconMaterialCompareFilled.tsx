import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareFilled'

      short_name='Compare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 23q-.425 0-.712-.288Q10 22.425 10 22v-1H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h5V2q0-.425.288-.713Q10.575 1 11 1t.713.287Q12 1.575 12 2v20q0 .425-.287.712Q11.425 23 11 23Zm-6-5h5v-6Zm9 3v-9l5 6V5h-5V3h5q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialCompareFilled.displayName = 'AmauiIconMaterialCompareFilled';

export default IconMaterialCompareFilled;
