import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUploadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadW100Filled'

      short_name='Upload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q-.15 0-.25-.1t-.1-.25V6.2l-2 2q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L14.85 7.7q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-2-2v8.45q0 .15-.1.25T12 15Zm-5.2 3.7q-.65 0-1.075-.425Q5.3 17.85 5.3 17.2v-1.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.85q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55v-1.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.85q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialUploadW100Filled.displayName = 'AmauiIconMaterialUploadW100Filled';

export default IconMaterialUploadW100Filled;
