import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalDrinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkW100Filled'

      short_name='LocalDrink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.35 20.7 4.45 3.3h15.1l-1.9 17.4ZM5.7 8.5h12.6l.45-4.5H5.25Zm6.3 9.35q.925 0 1.562-.638.638-.637.638-1.562 0-.725-.425-1.538Q13.35 13.3 12 11.5q-1.35 1.8-1.775 2.612-.425.813-.425 1.538 0 .925.638 1.562.637.638 1.562.638Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkW100Filled.displayName = 'AmauiIconMaterialLocalDrinkW100Filled';

export default IconMaterialLocalDrinkW100Filled;
