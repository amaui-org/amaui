import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialControlPointDuplicateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlPointDuplicateFilled'

      short_name='ControlPointDuplicate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16h2v-3h3v-2h-3V8h-2v3h-3v2h3Zm-8 4.5q-2.725-.95-4.362-3.288Q0 14.875 0 12q0-2.875 1.638-5.213Q3.275 4.45 6 3.5v2.2q-1.85.875-2.925 2.575Q2 9.975 2 12q0 2.025 1.075 3.725Q4.15 17.425 6 18.3Zm9 .5q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.925-2.85Q6 13.875 6 12t.713-3.513q.712-1.637 1.925-2.85 1.212-1.212 2.85-1.925Q13.125 3 15 3t3.513.712q1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q24 10.125 24 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q16.875 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialControlPointDuplicateFilled.displayName = 'AmauiIconMaterialControlPointDuplicateFilled';

export default IconMaterialControlPointDuplicateFilled;
