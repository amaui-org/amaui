import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUploadFileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileW100Filled'

      short_name='UploadFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 12.55v4.5q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-4.5l2 2q.05.05.113.075.062.025.125.025.062 0 .137-.025.075-.025.125-.075.125-.125.125-.25t-.125-.25l-2.325-2.325q-.125-.125-.25-.175-.125-.05-.275-.05-.15 0-.275.05-.125.05-.25.175L9.15 14.05q-.1.1-.112.237-.013.138.112.263t.25.125q.125 0 .25-.125ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm7.5-13.75q0 .325.213.537.212.213.537.213H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialUploadFileW100Filled.displayName = 'AmauiIconMaterialUploadFileW100Filled';

export default IconMaterialUploadFileW100Filled;
