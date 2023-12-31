import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioVideoReceiverW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioVideoReceiverW100Filled'

      short_name='AudioVideoReceiver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-348v-354h696v354h-80v42h-28v-42H240v42h-28v-42h-80Zm534-118q23 0 38.5-15.5T720-520q0-23-15.5-38.5T666-574q-23 0-38.5 15.5T612-520q0 23 15.5 38.5T666-466Zm-406 0h252v-108H260v108Z"/>
    </Icon>
  );
});

IconMaterialAudioVideoReceiverW100Filled.displayName = 'AmauiIconMaterialAudioVideoReceiverW100Filled';

export default IconMaterialAudioVideoReceiverW100Filled;
