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
      <path d="M8 8.75q.3 0 .525-.225Q8.75 8.3 8.75 8q0-.3-.225-.525Q8.3 7.25 8 7.25q-.3 0-.525.225Q7.25 7.7 7.25 8q0 .3.225.525.225.225.525.225Zm0 4q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525Q8.3 11.25 8 11.25q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225Zm0 4q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525Q8.3 15.25 8 15.25q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h9.65l4.25 4.25v9.65q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2V9h-3.25q-.325 0-.537-.213Q15 8.575 15 8.25V5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19ZM5 9V19 5v4-4 4Z"/>
    </Icon>
  );
});

IconMaterialSummarizeW100.displayName = 'AmauiIconMaterialSummarizeW100';

export default IconMaterialSummarizeW100;
