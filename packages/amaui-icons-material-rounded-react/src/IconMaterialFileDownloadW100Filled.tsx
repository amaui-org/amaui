import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadW100Filled'

      short_name='FileDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.7q-.15 0-.275-.05-.125-.05-.25-.175L9.15 12.15q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2 2V5.2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.45l2-2q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-2.325 2.325q-.125.125-.25.175-.125.05-.275.05Zm-5.2 4q-.65 0-1.075-.425Q5.3 17.85 5.3 17.2v-1.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.85q0 .3.25.55.25.25.55.25h10.4q.3 0 .55-.25.25-.25.25-.55v-1.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.85q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadW100Filled.displayName = 'AmauiIconMaterialFileDownloadW100Filled';

export default IconMaterialFileDownloadW100Filled;
