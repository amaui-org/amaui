import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbIncandescentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIncandescentW100'

      short_name='WbIncandescent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21.35V18.7h.7v2.65Zm-9-9v-.7H5.3v.7Zm16.05 0v-.7h2.65v.7Zm-.65 6.7L16.2 17.2l.5-.5 1.85 1.85Zm-12.1 0-.5-.5L7.3 16.7l.5.5ZM12 15.7q-1.55 0-2.625-1.075T8.3 12q0-1.05.538-1.925Q9.375 9.2 10.3 8.7V5.2h3.4v3.5q.925.5 1.463 1.375.537.875.537 1.925 0 1.55-1.075 2.625T12 15.7Zm-1-7.25q.25-.075.488-.113.237-.037.512-.037t.512.037q.238.038.488.113V5.9h-2ZM12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0-3Z"/>
    </Icon>
  );
});

IconMaterialWbIncandescentW100.displayName = 'AmauiIconMaterialWbIncandescentW100';

export default IconMaterialWbIncandescentW100;
