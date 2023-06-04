import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAcuteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcuteW100'

      short_name='Acute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.75 18.7q-2.8 0-4.75-1.95Q8.05 14.8 8.05 12T10 7.25q1.95-1.95 4.75-1.95t4.75 1.95Q21.45 9.2 21.45 12t-1.95 4.75q-1.95 1.95-4.75 1.95Zm0-.7q2.5 0 4.25-1.75T20.75 12q0-2.5-1.75-4.25T14.75 6q-2.5 0-4.25 1.75T8.75 12q0 2.5 1.75 4.25T14.75 18Zm2.525-2.95.5-.5-2.675-2.675V8.4h-.7v3.75ZM3.55 8.35v-.7h3.5v.7Zm-1 4v-.7h4.5v.7Zm1 4v-.7h3.5v.7ZM14.75 12Z"/>
    </Icon>
  );
});

IconMaterialAcuteW100.displayName = 'AmauiIconMaterialAcuteW100';

export default IconMaterialAcuteW100;
