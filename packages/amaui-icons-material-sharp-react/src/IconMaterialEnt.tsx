import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ent'

      short_name='Ent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M364 976h80l25-240h131v-80H477l9-80h194v-80H413l-49 480Zm-124 0V804q-57-52-88.5-121.5T120 536q0-150 105-255t255-105q125 0 221.5 73.5T827 441l64 255H760v200H600v80h-80V816h160V616h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Z"/>
    </Icon>
  );
});

IconMaterialEnt.displayName = 'AmauiIconMaterialEnt';

export default IconMaterialEnt;
