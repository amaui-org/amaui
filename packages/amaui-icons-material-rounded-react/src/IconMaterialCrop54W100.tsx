import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop54W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54W100'

      short_name='Crop54'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 18.7q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h12.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q18.5 6 18.2 6H5.8q-.3 0-.55.25Q5 6.5 5 6.8v10.4q0 .3.25.55.25.25.55.25ZM5 18V6 18Z"/>
    </Icon>
  );
});

IconMaterialCrop54W100.displayName = 'AmauiIconMaterialCrop54W100';

export default IconMaterialCrop54W100;
