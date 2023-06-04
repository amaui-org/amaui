import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAvTimerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvTimerW100Filled'

      short_name='AvTimer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.7q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm0 2q-1.6 0-3-.6t-2.45-1.65Q5.5 16.4 4.9 15q-.6-1.4-.6-3 0-1.65.588-2.988.587-1.337 1.562-2.387.225-.225.538-.225.312 0 .537.225l5.125 5.125q.05.05.075.112.025.063.025.125 0 .063-.025.138-.025.075-.075.125-.125.125-.25.125t-.25-.125L7 7.1q-.8.875-1.4 2.062Q5 10.35 5 12q0 2.9 2.05 4.95Q9.1 19 12 19q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.6-1.775-4.663Q15.45 5.275 12.35 5v1.65q0 .15-.1.25T12 7q-.15 0-.25-.1t-.1-.25v-1.6q0-.325.213-.55.212-.225.537-.2 1.5.05 2.825.675Q16.55 5.6 17.55 6.65q1 1.05 1.575 2.425Q19.7 10.45 19.7 12q0 1.6-.6 3t-1.65 2.45Q16.4 18.5 15 19.1q-1.4.6-3 .6Zm5-7q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm-10 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialAvTimerW100Filled.displayName = 'AmauiIconMaterialAvTimerW100Filled';

export default IconMaterialAvTimerW100Filled;
