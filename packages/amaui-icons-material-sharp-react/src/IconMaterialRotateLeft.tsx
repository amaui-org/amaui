import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateLeft'

      short_name='RotateLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22q-1.25-.125-2.4-.613Q7.45 20.9 6.4 20.1l1.4-1.45q.725.525 1.538.85.812.325 1.662.45Zm2 0v-2.05q2.6-.375 4.3-2.337Q19 15.65 19 13.05q0-2.925-2.038-4.962Q14.925 6.05 12 6.05h-.2l1.6 1.6-1.4 1.4-4-4 4-4 1.4 1.45-1.55 1.55H12q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q21 11.175 21 13.05q0 3.425-2.275 5.963Q16.45 21.55 13 22Zm-8.05-3.35q-.8-1.05-1.287-2.2-.488-1.15-.613-2.4H5.1q.125.85.45 1.662.325.813.85 1.538Zm-1.9-6.6q.15-1.275.625-2.45.475-1.175 1.275-2.15l1.45 1.4q-.525.725-.85 1.537-.325.813-.45 1.663Z"/>
    </Icon>
  );
});

IconMaterialRotateLeft.displayName = 'AmauiIconMaterialRotateLeft';

export default IconMaterialRotateLeft;
