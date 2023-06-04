import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsVoiceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVoiceW100'

      short_name='SettingsVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 23.7q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm-4-11q-.725 0-1.212-.488Q10.3 11.725 10.3 11V5q0-.725.488-1.213Q11.275 3.3 12 3.3t1.213.487Q13.7 4.275 13.7 5v6q0 .725-.487 1.212-.488.488-1.213.488ZM12 8Zm-.35 12.35v-3.6q-2.275-.2-3.812-1.838Q6.3 13.275 6.3 11H7q0 2.075 1.463 3.537Q9.925 16 12 16t3.538-1.463Q17 13.075 17 11h.7q0 2.275-1.537 3.912-1.538 1.638-3.813 1.838v3.6ZM12 12q.425 0 .713-.288Q13 11.425 13 11V5q0-.425-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5v6q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialSettingsVoiceW100.displayName = 'AmauiIconMaterialSettingsVoiceW100';

export default IconMaterialSettingsVoiceW100;
