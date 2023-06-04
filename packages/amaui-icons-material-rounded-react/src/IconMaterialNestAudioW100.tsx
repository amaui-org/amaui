import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestAudioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestAudioW100'

      short_name='NestAudio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.45 19.15q-1.2 0-2.05-.85-.85-.85-.85-2.05V8.6q0-1.575 1.1-2.663Q8.75 4.85 10.3 4.85h3.4q1.575 0 2.663 1.087Q17.45 7.025 17.45 8.6v7.65q0 1.2-.85 2.05-.85.85-2.05.85Zm0-.7h5.1q.9 0 1.55-.65t.65-1.55V8.6q0-1.275-.887-2.162-.888-.888-2.163-.888h-3.4q-1.275 0-2.163.888-.887.887-.887 2.162v7.65q0 .9.65 1.55t1.55.65Zm0-5.75q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm2.55 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 11.3 12 11.3t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm2.55 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.487q.213.213.488.213ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialNestAudioW100.displayName = 'AmauiIconMaterialNestAudioW100';

export default IconMaterialNestAudioW100;
