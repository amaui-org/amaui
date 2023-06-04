import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartW100'

      short_name='TableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.2 19.7H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h13.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM5 8.65h15V5.8q0-.3-.25-.55Q19.5 5 19.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8Zm3.5.7H5v8.85q0 .3.25.55.25.25.55.25h2.7Zm8 0V19h2.7q.3 0 .55-.25.25-.25.25-.55V9.35Zm-.7 0H9.2V19h6.6Z"/>
    </Icon>
  );
});

IconMaterialTableChartW100.displayName = 'AmauiIconMaterialTableChartW100';

export default IconMaterialTableChartW100;
