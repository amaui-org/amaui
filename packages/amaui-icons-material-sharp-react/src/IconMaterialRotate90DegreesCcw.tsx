import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotate90DegreesCcw = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCcw'

      short_name='Rotate90DegreesCcw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 22q-1.275 0-2.5-.35T8.2 20.6l1.45-1.45q.775.425 1.625.638Q12.125 20 13 20q2.925 0 4.962-2.038Q20 15.925 20 13t-2.038-4.963Q15.925 6 13 6h-.15l1.55 1.55L13 9 9 5l4-4 1.4 1.45L12.85 4H13q3.75 0 6.375 2.625T22 13q0 1.875-.712 3.512-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q14.875 22 13 22Zm-6-3-6-6 6-6 6 6Zm0-2.85L10.15 13 7 9.85 3.85 13ZM7 13Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCcw.displayName = 'AmauiIconMaterialRotate90DegreesCcw';

export default IconMaterialRotate90DegreesCcw;
