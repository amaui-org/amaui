import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaletteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaletteW100Filled'

      short_name='Palette'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 20.7q-1.775 0-3.35-.688-1.575-.687-2.75-1.862t-1.863-2.763Q3.3 13.8 3.3 12q0-1.825.7-3.413Q4.7 7 5.912 5.825q1.213-1.175 2.85-1.85Q10.4 3.3 12.25 3.3q1.675 0 3.2.562 1.525.563 2.688 1.563 1.162 1 1.862 2.387.7 1.388.7 3.038 0 2.15-1.212 3.5Q18.275 15.7 16 15.7h-1.75q-.75 0-1.275.525-.525.525-.525 1.275 0 .725.375 1.125t.375.925q0 .575-.325.863-.325.287-.925.287ZM6.5 12.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm3-4q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm5 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm3 4q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialPaletteW100Filled.displayName = 'AmauiIconMaterialPaletteW100Filled';

export default IconMaterialPaletteW100Filled;
