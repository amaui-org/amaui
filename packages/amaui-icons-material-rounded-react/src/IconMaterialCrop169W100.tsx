import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop169W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169W100'

      short_name='Crop169'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 15.7q-.65 0-1.075-.425Q4.3 14.85 4.3 14.2V9.8q0-.65.425-1.075Q5.15 8.3 5.8 8.3h12.4q.65 0 1.075.425.425.425.425 1.075v4.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V9.8q0-.3-.25-.55Q18.5 9 18.2 9H5.8q-.3 0-.55.25Q5 9.5 5 9.8v4.4q0 .3.25.55.25.25.55.25ZM5 15V9v6Z"/>
    </Icon>
  );
});

IconMaterialCrop169W100.displayName = 'AmauiIconMaterialCrop169W100';

export default IconMaterialCrop169W100;
