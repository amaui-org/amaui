import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipNext = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNext'

      short_name='SkipNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 18q-.425 0-.712-.288-.288-.287-.288-.712V7q0-.425.288-.713Q17.075 6 17.5 6t.712.287q.288.288.288.713v10q0 .425-.288.712-.287.288-.712.288ZM7.05 16.975q-.5.35-1.025.05-.525-.3-.525-.9v-8.25q0-.6.525-.9.525-.3 1.025.05l6.2 4.15q.45.3.45.825 0 .525-.45.825ZM7.5 12Zm0 2.25L10.9 12 7.5 9.75Z"/>
    </Icon>
  );
});

IconMaterialSkipNext.displayName = 'AmauiIconMaterialSkipNext';

export default IconMaterialSkipNext;
