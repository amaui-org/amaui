import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPages = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pages'

      short_name='Pages'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.275q.125 0 .262-.075.138-.075.188-.225l1.1-2.425 2.425-1.1q.15-.05.225-.188.075-.137.075-.262t-.075-.262q-.075-.138-.225-.188l-2.425-1.1-1.1-2.425q-.05-.15-.188-.225-.137-.075-.262-.075t-.262.075q-.138.075-.188.225l-1.1 2.425-2.425 1.1q-.15.05-.225.188-.075.137-.075.262t.075.262q.075.138.225.188l2.425 1.1 1.1 2.425q.05.15.188.225.137.075.262.075ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialPages.displayName = 'AmauiIconMaterialPages';

export default IconMaterialPages;
