import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioVideoReceiverW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioVideoReceiverW100'

      short_name='AudioVideoReceiver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-376h640v-298H160v298Zm-28 28v-354h696v354h-80v42h-28v-42H240v42h-28v-42h-80Zm28-28v-298 298Zm506-90q23 0 38.5-15.5T720-520q0-23-15.5-38.5T666-574q-23 0-38.5 15.5T612-520q0 23 15.5 38.5T666-466Zm-406 0h252v-108H260v108Z"/>
    </Icon>
  );
});

IconMaterialAudioVideoReceiverW100.displayName = 'AmauiIconMaterialAudioVideoReceiverW100';

export default IconMaterialAudioVideoReceiverW100;
