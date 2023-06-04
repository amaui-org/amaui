import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlaceItemW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaceItemW100Filled'

      short_name='PlaceItem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V9.8q0-.65.425-1.075Q5.15 8.3 5.8 8.3h2.85V9H5.8q-.3 0-.55.25Q5 9.5 5 9.8v8.4q0 .3.25.55.25.25.55.25h12.4q.3 0 .55-.25.25-.25.25-.55V9.8q0-.3-.25-.55Q18.5 9 18.2 9h-2.85v-.7h2.85q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm6.2-4.6L8.9 12l.5-.5 2.25 2.25V1.95h.7v11.8l2.25-2.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialPlaceItemW100Filled.displayName = 'AmauiIconMaterialPlaceItemW100Filled';

export default IconMaterialPlaceItemW100Filled;
