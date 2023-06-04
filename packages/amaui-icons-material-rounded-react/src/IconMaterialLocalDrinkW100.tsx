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
      <path d="M7.8 20.7q-.6 0-1.062-.4-.463-.4-.538-1L4.55 4.125q-.05-.35.163-.588.212-.237.562-.237h13.45q.35 0 .563.237.212.238.162.588L17.8 19.3q-.075.6-.488 1-.412.4-1.012.4Zm-2-11.5 1.1 10q.05.35.3.575.25.225.6.225h8.5q.3 0 .525-.25.225-.25.275-.55l1.1-10Zm-.1-.7h12.6l.45-4.5H5.25Zm6.3 9.35q.925 0 1.562-.638.638-.637.638-1.562 0-.65-.325-1.338-.325-.687-1.3-2.037-.225-.325-.575-.325t-.575.325q-.975 1.35-1.3 2.037Q9.8 15 9.8 15.65q0 .925.638 1.562.637.638 1.562.638Zm6.2-8.65H5.8h12.4ZM12 17.15q-.625 0-1.062-.425-.438-.425-.438-1.05 0-.675.413-1.388.412-.712 1.087-1.612.675.95 1.088 1.65.412.7.412 1.35 0 .625-.438 1.05-.437.425-1.062.425Z"/>
    </Icon>
  );
});

IconMaterialLocalDrinkW100.displayName = 'AmauiIconMaterialLocalDrinkW100';

export default IconMaterialLocalDrinkW100;
