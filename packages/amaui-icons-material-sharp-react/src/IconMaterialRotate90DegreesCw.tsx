import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotate90DegreesCw = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCw'

      short_name='Rotate90DegreesCw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.925-2.85Q2 14.875 2 13q0-3.75 2.625-6.375T11 4h.15L9.6 2.45 11 1l4 4-4 4-1.4-1.45L11.15 6H11Q8.075 6 6.038 8.037 4 10.075 4 13q0 2.925 2.038 4.962Q8.075 20 11 20q.875 0 1.725-.212.85-.213 1.625-.638l1.45 1.45q-1.075.7-2.3 1.05-1.225.35-2.5.35Zm6-3-6-6 6-6 6 6Zm0-2.85L20.15 13 17 9.85 13.85 13ZM17 13Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCw.displayName = 'AmauiIconMaterialRotate90DegreesCw';

export default IconMaterialRotate90DegreesCw;
