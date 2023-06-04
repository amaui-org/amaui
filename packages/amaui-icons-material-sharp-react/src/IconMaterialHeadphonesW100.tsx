import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadphonesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesW100'

      short_name='Headphones'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V12q0-1.6.6-3t1.65-2.45Q7.6 5.5 9 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 7.6 19.1 9q.6 1.4.6 3v7.7h-3.5v-5.6H19V12q0-2.925-2.038-4.963Q14.925 5 12 5T7.038 7.037Q5 9.075 5 12v2.1h2.8v5.6ZM5 19h2.1v-4.2H5Zm11.9 0H19v-4.2h-2.1ZM5 19h2.1Zm11.9 0H19Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesW100.displayName = 'AmauiIconMaterialHeadphonesW100';

export default IconMaterialHeadphonesW100;
