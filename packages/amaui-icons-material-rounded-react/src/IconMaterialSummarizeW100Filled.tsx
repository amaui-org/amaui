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
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h9.65l4.25 4.25v9.65q0 .65-.425 1.075-.425.425-1.075.425ZM19 9l-4-4v3.25q0 .325.213.537.212.213.537.213ZM8 8.75q.3 0 .525-.225Q8.75 8.3 8.75 8q0-.3-.225-.525Q8.3 7.25 8 7.25q-.3 0-.525.225Q7.25 7.7 7.25 8q0 .3.225.525.225.225.525.225Zm0 4q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525Q8.3 11.25 8 11.25q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225Zm0 4q.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525Q8.3 15.25 8 15.25q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525.225.225.525.225Z"/>
    </Icon>
  );
});

IconMaterialSummarizeW100Filled.displayName = 'AmauiIconMaterialSummarizeW100Filled';

export default IconMaterialSummarizeW100Filled;
