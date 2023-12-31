import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAsterisk = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Asterisk'

      short_name='Asterisk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z"/>
    </Icon>
  );
});

IconMaterialAsterisk.displayName = 'AmauiIconMaterialAsterisk';

export default IconMaterialAsterisk;
