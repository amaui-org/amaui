import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvWithAssistantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvWithAssistantW100'

      short_name='TvWithAssistant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 12.2q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm3 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-6 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.775 10.8 7.5 10.8t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm9 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213ZM4.8 19v-1.3q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v9.4q0 .625-.437 1.062-.438.438-1.063.438V19h-.35l-.475-1.3h-12.7L5.15 19Zm0-2h14.4q.35 0 .575-.225Q20 16.55 20 16.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v9.4q0 .35.225.575Q4.45 17 4.8 17Zm7.2-5.5Z"/>
    </Icon>
  );
});

IconMaterialTvWithAssistantW100.displayName = 'AmauiIconMaterialTvWithAssistantW100';

export default IconMaterialTvWithAssistantW100;
