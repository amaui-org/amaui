import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkLockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedW100'

      short_name='NetworkLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.85 20h7.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-7.7q-.5 0-.687-.463-.188-.462.162-.812l13-13q.35-.35.813-.163.462.188.462.688v4.7q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.8Zm11.35 1.4q-.35 0-.625-.275T17.3 20.5v-2.65q0-.35.275-.6T18.2 17h.1v-1q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213v1h.1q.35 0 .613.25.262.25.262.6v2.65q0 .35-.262.625-.263.275-.613.275ZM19 17h2v-1q0-.425-.288-.713Q20.425 15 20 15t-.712.287Q19 15.575 19 16Zm-5.575-3.575Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedW100.displayName = 'AmauiIconMaterialNetworkLockedW100';

export default IconMaterialNetworkLockedW100;
