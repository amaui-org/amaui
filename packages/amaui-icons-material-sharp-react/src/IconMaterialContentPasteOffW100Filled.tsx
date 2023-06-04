import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOffW100Filled'

      short_name='ContentPasteOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 18.7 19.7H4.3V5.3L3.15 4.15l.5-.5 16.7 16.7ZM5 19h13L5 6Zm14.7-2.1-.7-.7V5h-3.3v2H9.8L7.1 4.3h3.475q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H19.7ZM12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOffW100Filled.displayName = 'AmauiIconMaterialContentPasteOffW100Filled';

export default IconMaterialContentPasteOffW100Filled;
