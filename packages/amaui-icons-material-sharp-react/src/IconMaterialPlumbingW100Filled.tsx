import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlumbingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlumbingW100Filled'

      short_name='Plumbing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.425 9.225-2.7-2.7L13.6 8.65l-1.2-1.2 2.4-2.4q.2-.2.438-.288.237-.087.487-.087t.5.087q.25.088.45.288l1.375 1.375q.35.35.512.775.163.425.163.9 0 .275-.075.562-.075.288-.225.563Zm-10.65 4.05Q7.5 13 7.5 12.662q0-.337.275-.612l2-2 1.2 1.2-2.025 2.025q-.275.275-.587.275-.313 0-.588-.275Zm-2.125 6.7q-.2-.2-.287-.45-.088-.25-.088-.525t.088-.538Q5.45 18.2 5.65 18l6.75-6.75-3.625-3.625q-.275-.275-.263-.588.013-.312.288-.587.275-.275.6-.262.325.012.6.287l3.6 3.6 1.425-1.425 2.125 2.125q.125.125.125.237 0 .113-.125.238-.125.1-.275.075-.15-.025-.425-.25L7.575 19.95q-.2.2-.437.3-.238.1-.513.1t-.525-.087q-.25-.088-.45-.288Z"/>
    </Icon>
  );
});

IconMaterialPlumbingW100Filled.displayName = 'AmauiIconMaterialPlumbingW100Filled';

export default IconMaterialPlumbingW100Filled;
