import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeMuteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeMuteW100Filled'

      short_name='VolumeMute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 13.7q-.325 0-.538-.213-.212-.212-.212-.537v-1.9q0-.325.212-.538.213-.212.538-.212h2.5l1.875-1.875q.35-.35.813-.163.462.188.462.688v6.1q0 .5-.462.687-.463.188-.813-.162L11.55 13.7Z"/>
    </Icon>
  );
});

IconMaterialVolumeMuteW100Filled.displayName = 'AmauiIconMaterialVolumeMuteW100Filled';

export default IconMaterialVolumeMuteW100Filled;
