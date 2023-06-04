import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateLeftW100'

      short_name='RotateLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20.7q-1.025-.175-1.962-.563Q8.1 19.75 7.3 19.15l.5-.5q.725.525 1.538.85.812.325 1.662.45Zm2 0V20q2.6-.425 4.3-2.387Q19 15.65 19 13.05q0-2.925-2.038-4.962Q14.925 6.05 12 6.05h-.95L13.3 8.3l-.5.5-3.1-3.1 3.1-3.1.5.5-2.25 2.25H12q1.6 0 3 .6t2.45 1.65q1.05 1.05 1.65 2.45.6 1.4.6 3 0 2.925-1.912 5.1Q15.875 20.325 13 20.7Zm-7.1-2.95q-.625-.825-1.025-1.762-.4-.938-.525-1.938h.7q.15.875.487 1.675.338.8.863 1.525Zm-1.55-5.7q.15-1.075.55-2.013.4-.937 1-1.687l.5.5q-.525.725-.863 1.525-.337.8-.487 1.675Z"/>
    </Icon>
  );
});

IconMaterialRotateLeftW100.displayName = 'AmauiIconMaterialRotateLeftW100';

export default IconMaterialRotateLeftW100;
