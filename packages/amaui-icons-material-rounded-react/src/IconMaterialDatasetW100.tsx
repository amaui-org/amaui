import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatasetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatasetW100'

      short_name='Dataset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 16.35h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7Zm-6-6h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialDatasetW100.displayName = 'AmauiIconMaterialDatasetW100';

export default IconMaterialDatasetW100;
