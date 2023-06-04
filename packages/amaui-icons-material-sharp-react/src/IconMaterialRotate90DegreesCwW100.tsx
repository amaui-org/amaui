import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotate90DegreesCwW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rotate90DegreesCwW100'

      short_name='Rotate90DegreesCw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.275 20.7q-1.6 0-3-.6t-2.45-1.65Q4.775 17.4 4.175 16q-.6-1.4-.6-3 0-3.2 2.25-5.45t5.45-2.25h1.65l-2.15-2.15.5-.6 3.1 3.1-3.1 3.1-.5-.6L12.925 6h-1.65Q8.35 6 6.312 8.037 4.275 10.075 4.275 13q0 2.925 2.037 4.962Q8.35 20 11.275 20q.875 0 1.725-.212.85-.213 1.625-.638l.5.5q-.875.5-1.85.775-.975.275-2 .275Zm6-3.55L13.125 13l4.15-4.15 4.15 4.15Zm0-1 3.15-3.15-3.15-3.15-3.15 3.15Zm0-3.15Z"/>
    </Icon>
  );
});

IconMaterialRotate90DegreesCwW100.displayName = 'AmauiIconMaterialRotate90DegreesCwW100';

export default IconMaterialRotate90DegreesCwW100;
