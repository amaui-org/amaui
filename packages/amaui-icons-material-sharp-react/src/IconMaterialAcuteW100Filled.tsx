import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAcuteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcuteW100Filled'

      short_name='Acute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.75 18.7q-2.8 0-4.75-1.95Q8.05 14.8 8.05 12T10 7.25q1.95-1.95 4.75-1.95t4.75 1.95Q21.45 9.2 21.45 12t-1.95 4.75q-1.95 1.95-4.75 1.95Zm2.525-3.65.5-.5-2.675-2.675V8.4h-.7v3.75ZM3.55 8.35v-.7h3.5v.7Zm-1 4v-.7h4.5v.7Zm1 4v-.7h3.5v.7Z"/>
    </Icon>
  );
});

IconMaterialAcuteW100Filled.displayName = 'AmauiIconMaterialAcuteW100Filled';

export default IconMaterialAcuteW100Filled;
