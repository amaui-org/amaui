import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteGoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteGoW100Filled'

      short_name='ContentPasteGo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h6.275q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H19.7v7.625H19V5h-3.3v2H8.3V5H5v14h5.65v.7Zm13.7.375-.5-.5 2.225-2.225H12.65v-.7h7.075L17.5 14.425l.5-.5L21.075 17ZM12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialContentPasteGoW100Filled.displayName = 'AmauiIconMaterialContentPasteGoW100Filled';

export default IconMaterialContentPasteGoW100Filled;
