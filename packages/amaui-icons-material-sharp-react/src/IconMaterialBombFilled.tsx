import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBombFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BombFilled'

      short_name='Bomb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-48q-125 0-212.5-88.5T46-350q0-125 86.5-211.5T344-648h13l57-99 82 47 5-8q23-43 72-56t92 12l35 20-40 69-35-20q-14-8-30.5-3.5T570-668l-5 8 91 52-56 100q23 36 34.5 76.5T646-348q0 125-87.5 212.5T346-48Zm454-560v-80h120v80H800ZM580-828v-120h80v120h-80Zm195 81-56-56 85-85 56 56-85 85Z"/>
    </Icon>
  );
});

IconMaterialBombFilled.displayName = 'AmauiIconMaterialBombFilled';

export default IconMaterialBombFilled;
