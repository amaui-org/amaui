import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalDrinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkW100Filled'

      short_name='LocalDrink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 20.7q-.6 0-1.062-.4-.463-.4-.538-1L4.55 4.125q-.05-.35.163-.588.212-.237.562-.237h13.45q.35 0 .563.237.212.238.162.588L17.8 19.3q-.075.6-.488 1-.412.4-1.012.4ZM5.7 8.5h12.6l.45-4.5H5.25Zm6.3 9.35q.925 0 1.562-.638.638-.637.638-1.562 0-.65-.325-1.338-.325-.687-1.3-2.037-.225-.325-.575-.325t-.575.325q-.975 1.35-1.3 2.037Q9.8 15 9.8 15.65q0 .925.638 1.562.637.638 1.562.638Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkW100Filled.displayName = 'AmauiIconMaterialLocalDrinkW100Filled';

export default IconMaterialLocalDrinkW100Filled;
