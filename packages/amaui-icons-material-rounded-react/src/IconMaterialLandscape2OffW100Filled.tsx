import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscape2OffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2OffW100Filled'

      short_name='Landscape2Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M833-107q-5 5-10 5t-10-5L108-812q-4-4-4.5-9.5T108-832q5-5 10-5t10 5l705 705q4 4 4.5 9.5T833-107ZM247-565q-38 0-65.5-27T154-657q0-31 17.5-54.5T216-744l117 117q-9 27-32.5 44.5T247-565Zm559 266q-8 5-18.5 4.5T769-303L483-589q-6-6-7.5-14t.5-16l4-13q12-37 44-58.5t70-21.5q38 0 70 21t44 57l110 299q5 11 .5 21T806-299Zm-658 87q-17 0-26-14.5t-1-29.5l85-160q8-15 22-23.5t31-8.5q18 0 33 9.5t22 26.5l19 44q9 19 33 17.5t31-20.5l47-145 304 304H148Z"/>
    </Icon>
  );
});

IconMaterialLandscape2OffW100Filled.displayName = 'AmauiIconMaterialLandscape2OffW100Filled';

export default IconMaterialLandscape2OffW100Filled;
