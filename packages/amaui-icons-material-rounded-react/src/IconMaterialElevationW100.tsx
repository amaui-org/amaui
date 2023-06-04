import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElevationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElevationW100'

      short_name='Elevation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M712 842H226q-18 0-27-16t2-31l131-184q8-12 21.5-18.5T381 586h154q7 0 13-3t11-8l160-187q14-16 33.5-8.5T772 408v374q0 25-17.5 42.5T712 842ZM289 486 156 672q-3 5-8.5 5.5T137 675q-5-3-5.5-8.5T134 656l123-173q8-12 21.5-18.5T306 458h170l169-198q4-5 9.5-5t10.5 4q5 4 5.5 9t-3.5 10L506 465q-8 10-19.5 15.5T461 486H289Zm-67 328h490q14 0 23-9t9-23V402L580 593q-8 10-19.5 15.5T535 614H381q-8 0-14.5 3.5T355 627L222 814Zm522 0Z"/>
    </Icon>
  );
});

IconMaterialElevationW100.displayName = 'AmauiIconMaterialElevationW100';

export default IconMaterialElevationW100;
