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
      <path d="M226-306q-6 0-10-4t-4-10v-28h-20q-26 0-43-17t-17-43v-234q0-26 17-43t43-17h576q26 0 43 17t17 43v234q0 26-17 43t-43 17h-20v28q0 6-4 10t-10 4q-6 0-10-4t-4-10v-28H240v28q0 6-4 10t-10 4Zm440-160q23 0 38.5-15.5T720-520q0-23-15.5-38.5T666-574q-23 0-38.5 15.5T612-520q0 23 15.5 38.5T666-466Zm-376 0h192q13 0 21.5-8.5T512-496v-48q0-13-8.5-21.5T482-574H290q-13 0-21.5 8.5T260-544v48q0 13 8.5 21.5T290-466Z"/>
    </Icon>
  );
});

IconMaterialAudioVideoReceiverW100Filled.displayName = 'AmauiIconMaterialAudioVideoReceiverW100Filled';

export default IconMaterialAudioVideoReceiverW100Filled;
