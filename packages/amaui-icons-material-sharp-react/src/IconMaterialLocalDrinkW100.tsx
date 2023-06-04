import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalDrinkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDrinkW100'

      short_name='LocalDrink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.35 20.7 4.45 3.3h15.1l-1.9 17.4ZM7 20h10l1.2-10.8H5.8ZM5.7 8.5h12.6l.45-4.5H5.25Zm6.3 9.35q.925 0 1.562-.638.638-.637.638-1.562 0-.725-.425-1.538Q13.35 13.3 12 11.5q-1.35 1.8-1.775 2.612-.425.813-.425 1.538 0 .925.638 1.562.637.638 1.562.638Zm0-.7q-.625 0-1.062-.425-.438-.425-.438-1.05 0-.675.413-1.388.412-.712 1.087-1.612.675.95 1.088 1.65.412.7.412 1.35 0 .625-.438 1.05-.437.425-1.062.425ZM5.8 9.2h12.4Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkW100.displayName = 'AmauiIconMaterialLocalDrinkW100';

export default IconMaterialLocalDrinkW100;
