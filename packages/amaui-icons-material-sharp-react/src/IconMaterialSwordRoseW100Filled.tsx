import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwordRoseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwordRoseW100Filled'

      short_name='SwordRose'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m603-516-87-87 226-225h86v86L603-516ZM190-121l-70-70 145-145-88-88 48-48 80 80 50-50 87 87-50 50 79 79-48 48-88-88-145 145Zm638-30-20 19-466-464q-35 26-79 24t-76-34l-43-44q30-29 72-29.5t72 29.5l54 54q3-2 5.5-5t5.5-5q2-2 4.5-5t4.5-5l-55-54q-38-38-91-37.5T125-669l-11-11 166-166 73 74q32 32 34.5 76.5T362-616l319 319q-11-27-14-55t3-57q5-24 16-46t27-40.5q16-18.5 35-34.5t41-29q29 41 44.5 88t5.5 95q-8 44-34.5 79T741-238l87 87Z"/>
    </Icon>
  );
});

IconMaterialSwordRoseW100Filled.displayName = 'AmauiIconMaterialSwordRoseW100Filled';

export default IconMaterialSwordRoseW100Filled;
