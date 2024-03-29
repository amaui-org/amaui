import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrushFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushFilled'

      short_name='Brush'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-1.125 0-2.225-.55T2 19q.65 0 1.325-.512Q4 17.975 4 17q0-1.25.875-2.125T7 14q1.25 0 2.125.875T10 17q0 1.65-1.175 2.825Q7.65 21 6 21Zm0-2q.825 0 1.412-.587Q8 17.825 8 17q0-.425-.287-.712Q7.425 16 7 16t-.713.288Q6 16.575 6 17q0 .575-.137 1.05-.138.475-.363.9.125.05.25.05H6Zm5.75-4L9 12.25l9.65-9.65 2.75 2.75ZM6 19h-.25q-.125 0-.25-.05.225-.425.363-.9Q6 17.575 6 17q0-.425.287-.712Q6.575 16 7 16t.713.288Q8 16.575 8 17q0 .825-.588 1.413Q6.825 19 6 19Z"/>
    </Icon>
  );
});

IconMaterialBrushFilled.displayName = 'AmauiIconMaterialBrushFilled';

export default IconMaterialBrushFilled;
