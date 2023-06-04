import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAzmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmW100'

      short_name='Azm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M452 891V604H165l296-296h287v287L452 891Zm162-202 106-106V336H473L367 442h247v247ZM480 823l106-106V470H339L233 576h247v247Z"/>
    </Icon>
  );
});

IconMaterialAzmW100.displayName = 'AmauiIconMaterialAzmW100';

export default IconMaterialAzmW100;
