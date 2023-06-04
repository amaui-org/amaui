import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewStreamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamW100'

      short_name='ViewStream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 16.2v-3.85H5v3.85q0 .3.25.55.25.25.55.25h12.4q.3 0 .55-.25.25-.25.25-.55Zm0-4.55V7.8q0-.3-.25-.55Q18.5 7 18.2 7H5.8q-.3 0-.55.25Q5 7.5 5 7.8v3.85h14ZM5.8 17.7q-.65 0-1.075-.425Q4.3 16.85 4.3 16.2V7.8q0-.65.425-1.075Q5.15 6.3 5.8 6.3h12.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialViewStreamW100.displayName = 'AmauiIconMaterialViewStreamW100';

export default IconMaterialViewStreamW100;
