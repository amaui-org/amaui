import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageW100'

      short_name='HideImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.7 16.85-.7-.7V5H7.85l-.7-.7H19.7Zm1 4.85-2-2H4.3V5.3l-2-2 .5-.5 18.4 18.4ZM7.95 16.35 9.6 14.2l1.6 1.85 1.725-2.125L5 6v13h13l-2.65-2.65ZM12 12Zm-.5.5Z"/>
    </Icon>
  );
});

IconMaterialHideImageW100.displayName = 'AmauiIconMaterialHideImageW100';

export default IconMaterialHideImageW100;
