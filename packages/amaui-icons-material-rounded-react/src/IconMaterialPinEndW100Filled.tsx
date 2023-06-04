import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinEndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinEndW100Filled'

      short_name='PinEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.625 14.125 10.35 9.85v2.8q0 .15-.1.25T10 13q-.15 0-.25-.1t-.1-.25V9.4q0-.325.213-.538.212-.212.537-.212h3.25q.15 0 .25.1T14 9q0 .15-.1.25t-.25.1h-2.825l4.3 4.275q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125ZM18.45 18.7q-.95 0-1.6-.65-.65-.65-.65-1.6 0-.95.65-1.6.65-.65 1.6-.65.95 0 1.6.65.65.65.65 1.6 0 .95-.65 1.6-.65.65-1.6.65Zm-13.65 0q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v4.85H20V6.8q0-.3-.25-.55Q19.5 6 19.2 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .3.25.55.25.25.55.25h8.85v.7Z"/>
    </Icon>
  );
});

IconMaterialPinEndW100Filled.displayName = 'AmauiIconMaterialPinEndW100Filled';

export default IconMaterialPinEndW100Filled;
