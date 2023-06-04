import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreDoubleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreDoubleW100Filled'

      short_name='UnfoldMoreDouble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 2.85-2.9 2.9q-.125.125-.25.112-.125-.012-.25-.137-.1-.125-.112-.25-.013-.125.112-.25l2.875-2.875q.225-.225.525-.225.3 0 .525.225l2.9 2.9q.1.1.113.237.012.138-.113.263t-.25.112q-.125-.012-.25-.112Zm0 5-2.9 2.9q-.125.125-.25.113-.125-.013-.25-.138-.1-.125-.112-.25-.013-.125.112-.25l2.875-2.875q.225-.225.525-.225.3 0 .525.225l2.9 2.9q.1.1.113.238.012.137-.113.262t-.25.113q-.125-.013-.25-.113Zm.025 8.3 2.9-2.9q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-2.875 2.875q-.225.225-.525.225-.3 0-.525-.225L8.6 13.75q-.125-.1-.125-.238 0-.137.125-.262t.25-.113q.125.013.25.113Zm0 5 2.9-2.9q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-2.875 2.875q-.225.225-.525.225-.3 0-.525-.225L8.6 18.75q-.125-.1-.125-.238 0-.137.125-.262t.25-.113q.125.013.25.113Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreDoubleW100Filled.displayName = 'AmauiIconMaterialUnfoldMoreDoubleW100Filled';

export default IconMaterialUnfoldMoreDoubleW100Filled;
