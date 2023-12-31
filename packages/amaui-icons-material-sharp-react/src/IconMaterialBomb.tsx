import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBomb = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bomb'

      short_name='Bomb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-48q-125 0-212.5-88.5T46-350q0-125 86.5-211.5T344-648h13l57-99 82 47 5-8q23-43 72-56t92 12l35 20-40 69-35-20q-14-8-30.5-3.5T570-668l-5 8 91 52-56 100q23 36 34.5 76.5T646-348q0 125-87.5 212.5T346-48Zm0-80q91 0 155.5-64.5T566-348q0-31-8.5-61T532-466l-26-41 42-72-104-60-42 72h-44q-94 0-163.5 60T125-350q0 92 64.5 157T346-128Zm454-480v-80h120v80H800ZM580-828v-120h80v120h-80Zm195 81-56-56 85-85 56 56-85 85ZM346-348Z"/>
    </Icon>
  );
});

IconMaterialBomb.displayName = 'AmauiIconMaterialBomb';

export default IconMaterialBomb;
