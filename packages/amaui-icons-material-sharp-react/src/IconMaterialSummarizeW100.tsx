import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSummarizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SummarizeW100'

      short_name='Summarize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h11.15l4.25 4.25V19.7ZM5 19h14V9h-4V5H5ZM8 8.75q.3 0 .525-.225Q8.75 8.3 8.75 8q0-.3-.225-.525Q8.3 7.25 8 7.25q-.3 0-.525.225Q7.25 7.7 7.25 8q0 .3.225.525.225.225.525.225Zm0 4q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525Q8.3 11.25 8 11.25q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225Zm0 4q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525Q8.3 15.25 8 15.25q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225ZM5 5v4-4 14Z"/>
    </Icon>
  );
});

IconMaterialSummarizeW100.displayName = 'AmauiIconMaterialSummarizeW100';

export default IconMaterialSummarizeW100;
