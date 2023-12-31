import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatInfoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatInfoW100'

      short_name='ChatInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-700q8.5 0 14.25-5.75T500-720q0-8.5-5.75-14.25T480-740q-8.5 0-14.25 5.75T460-720q0 8.5 5.75 14.25T480-700Zm-14 310h28v-244h-28v244ZM132-180v-648h696v536H244L132-180Zm100-140h568v-480H160v552l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialChatInfoW100.displayName = 'AmauiIconMaterialChatInfoW100';

export default IconMaterialChatInfoW100;
