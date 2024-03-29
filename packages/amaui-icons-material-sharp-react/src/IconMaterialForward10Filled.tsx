import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForward10Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forward10Filled'

      short_name='Forward10'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16v-4.5H7.5V10h3v6Zm3.5 0q-.425 0-.712-.288-.288-.287-.288-.712v-4q0-.425.288-.713.287-.287.712-.287h2q.425 0 .713.287.287.288.287.713v4q0 .425-.287.712-.288.288-.713.288Zm.5-1.5h1v-3h-1v3ZM12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.924Q10.125 4 12 4h.15L10.6 2.45 12 1l4 4-4 4-1.4-1.45L12.15 6H12Q9.075 6 7.038 8.037 5 10.075 5 13q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13h2q0 1.875-.712 3.512-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialForward10Filled.displayName = 'AmauiIconMaterialForward10Filled';

export default IconMaterialForward10Filled;
