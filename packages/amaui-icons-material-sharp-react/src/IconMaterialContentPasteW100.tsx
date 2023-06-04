import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteW100'

      short_name='ContentPaste'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212ZM4.3 19.7V4.3h6.275q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H19.7v15.4ZM5 19h14V5h-3.3v2H8.3V5H5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteW100.displayName = 'AmauiIconMaterialContentPasteW100';

export default IconMaterialContentPasteW100;
