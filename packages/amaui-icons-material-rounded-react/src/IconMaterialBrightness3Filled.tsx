import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3Filled'

      short_name='Brightness3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 12q0 2.025-.737 3.8-.738 1.775-2.038 3.125-1.3 1.35-3.062 2.162Q11.4 21.9 9.35 22q-.425.025-.713-.288-.287-.312-.287-.737 0-.25.1-.462.1-.213.3-.338 2.05-1.45 3.15-3.575T13 12q0-2.475-1.1-4.6-1.1-2.125-3.15-3.575-.2-.125-.3-.338-.1-.212-.1-.462 0-.425.287-.738.288-.312.713-.287 2.05.1 3.813.912 1.762.813 3.062 2.163 1.3 1.35 2.038 3.125Q19 9.975 19 12Z"/>
    </Icon>
  );
});

IconMaterialBrightness3Filled.displayName = 'AmauiIconMaterialBrightness3Filled';

export default IconMaterialBrightness3Filled;
