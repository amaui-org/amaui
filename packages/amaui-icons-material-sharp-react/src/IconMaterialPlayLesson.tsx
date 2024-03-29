import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayLesson = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayLesson'

      short_name='PlayLesson'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V2h16v9.1q-.45-.05-1-.05t-1 .05V4h-5v7L9.5 9.5 7 11V4H5v16h6.3q.15.5.413 1.038.262.537.537.962Zm15 1q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23Zm-1.25-2.5 4-2.5-4-2.5ZM7 4h5-5ZM5 4h12-6 .3Z"/>
    </Icon>
  );
});

IconMaterialPlayLesson.displayName = 'AmauiIconMaterialPlayLesson';

export default IconMaterialPlayLesson;
