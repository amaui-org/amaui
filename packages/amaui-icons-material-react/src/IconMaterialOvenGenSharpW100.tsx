import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOvenGenSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenGenSharpW100'
      short_name='OvenGen'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM5 11.35v6.85q0 .3.25.55.25.25.55.25h12.4q.3 0 .55-.25.25-.25.25-.55v-6.85h-3.3v4.35H8.3v-4.35ZM9 15h6v-3.65H9Zm-4-4.35h14V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8Zm2.95-2.4q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialOvenGenSharpW100.displayName = 'AmauiIconMaterialOvenGenSharpW100';

export default IconMaterialOvenGenSharpW100;
