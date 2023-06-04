import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSummarizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SummarizeW100Filled'

      short_name='Summarize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 8.75q.3 0 .525-.225Q8.75 8.3 8.75 8q0-.3-.225-.525Q8.3 7.25 8 7.25q-.3 0-.525.225Q7.25 7.7 7.25 8q0 .3.225.525.225.225.525.225Zm0 4q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525Q8.3 11.25 8 11.25q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225Zm0 4q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525Q8.3 15.25 8 15.25q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225ZM4.3 19.7V4.3h11.15l4.25 4.25V19.7ZM15 9h4l-4-4Z"/>
    </Icon>
  );
});

IconMaterialSummarizeW100Filled.displayName = 'AmauiIconMaterialSummarizeW100Filled';

export default IconMaterialSummarizeW100Filled;
