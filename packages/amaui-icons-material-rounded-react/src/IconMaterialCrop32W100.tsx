import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop32W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32W100'

      short_name='Crop32'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 16.7q-.65 0-1.075-.425Q4.3 15.85 4.3 15.2V8.8q0-.65.425-1.075Q5.15 7.3 5.8 7.3h12.4q.65 0 1.075.425.425.425.425 1.075v6.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V8.8q0-.3-.25-.55Q18.5 8 18.2 8H5.8q-.3 0-.55.25Q5 8.5 5 8.8v6.4q0 .3.25.55.25.25.55.25ZM5 16V8v8Z"/>
    </Icon>
  );
});

IconMaterialCrop32W100.displayName = 'AmauiIconMaterialCrop32W100';

export default IconMaterialCrop32W100;
