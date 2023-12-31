import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallArtW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallArtW100Filled'

      short_name='WallArt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-132q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h174l93-93q9-9 21-9t21 9l93 93h174q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm256-146-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109Zm222-162q17 0 28.5-11.5T710-480q0-17-11.5-28.5T670-520q-17 0-28.5 11.5T630-480q0 17 11.5 28.5T670-440ZM406-668h148l-74-74-74 74Z"/>
    </Icon>
  );
});

IconMaterialWallArtW100Filled.displayName = 'AmauiIconMaterialWallArtW100Filled';

export default IconMaterialWallArtW100Filled;
