import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForward5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward5Filled'

      short_name='Forward5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 16v-1.5h3v-1h-3V10H14v1.5h-3v1h3V16Zm2.5 6q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.924Q10.125 4 12 4h.15L10.6 2.45 12 1l4 4-4 4-1.4-1.45L12.15 6H12Q9.075 6 7.038 8.037 5 10.075 5 13q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13h2q0 1.875-.712 3.512-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialForward5Filled.displayName = 'AmauiIconMaterialForward5Filled';

export default IconMaterialForward5Filled;
