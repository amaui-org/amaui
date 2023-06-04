import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadphonesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesW100Filled'

      short_name='Headphones'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V12q0-1.6.6-3t1.65-2.45Q7.6 5.5 9 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 7.6 19.1 9q.6 1.4.6 3v6.2q0 .625-.437 1.062-.438.438-1.063.438h-.5q-.625 0-1.063-.438-.437-.437-.437-1.062v-2.6q0-.625.437-1.063.438-.437 1.063-.437H19V12q0-2.925-2.038-4.963Q14.925 5 12 5T7.038 7.037Q5 9.075 5 12v2.1h1.3q.625 0 1.063.437.437.438.437 1.063v2.6q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesW100Filled.displayName = 'AmauiIconMaterialHeadphonesW100Filled';

export default IconMaterialHeadphonesW100Filled;
