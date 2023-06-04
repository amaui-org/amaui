import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicrowaveGenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrowaveGenW100'

      short_name='MicrowaveGen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q19.5 6 19.2 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .3.25.55.25.25.55.25Zm1.35-2.15h7.7v-7.7h-7.7Zm11.35 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.187q-.213.188-.213.513 0 .275.213.487.212.213.487.213Zm-10.65-.7v-6.3h6.3v6.3ZM17.5 12.7q.275 0 .488-.188.212-.187.212-.512t-.212-.513q-.213-.187-.488-.187t-.487.187q-.213.188-.213.513t.213.512q.212.188.487.188Zm0-3.15q.275 0 .488-.188.212-.187.212-.512t-.212-.513q-.213-.187-.488-.187t-.487.187q-.213.188-.213.513t.213.512q.212.188.487.188ZM4 18V6 18Z"/>
    </Icon>
  );
});

IconMaterialMicrowaveGenW100.displayName = 'AmauiIconMaterialMicrowaveGenW100';

export default IconMaterialMicrowaveGenW100;
