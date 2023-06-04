import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrushW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushW100Filled'

      short_name='Brush'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7q.825 0 1.412-.587.588-.588.588-1.413 0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713 0 .575-.137 1.05-.138.475-.363.9.125.05.25.05h.25Zm4.6-4.15-1.4-1.4 8.6-8.6 1.4 1.4ZM6.5 18.5h-.25q-.125 0-.25-.05.225-.425.363-.9.137-.475.137-1.05 0-.425.287-.713.288-.287.713-.287t.713.287q.287.288.287.713 0 .825-.588 1.413-.587.587-1.412.587Z"/>
    </Icon>
  );
});

IconMaterialBrushW100Filled.displayName = 'AmauiIconMaterialBrushW100Filled';

export default IconMaterialBrushW100Filled;
