import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestAudioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestAudioW100Filled'

      short_name='NestAudio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.45 19.15q-1.2 0-2.05-.85-.85-.85-.85-2.05V8.6q0-1.575 1.1-2.663Q8.75 4.85 10.3 4.85h3.4q1.575 0 2.663 1.087Q17.45 7.025 17.45 8.6v7.65q0 1.2-.85 2.05-.85.85-2.05.85Zm0-6.45q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm2.55 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 11.3 12 11.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm2.55 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.487q.213.213.488.213Z"/>
    </Icon>
  );
});

IconMaterialNestAudioW100Filled.displayName = 'AmauiIconMaterialNestAudioW100Filled';

export default IconMaterialNestAudioW100Filled;
