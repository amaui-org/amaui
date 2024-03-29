import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchitectureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchitectureFilled'

      short_name='Architecture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.1 11.9-2.7 7.45q-.025.075-.125.175l-.8.775q-.225.225-.512.113-.288-.113-.338-.413l-.1-1.075.025-.225 2.8-7.75q.375.35.813.587.437.238.937.363Zm1.8 0q.5-.125.938-.363.437-.237.812-.587l2.8 7.75q.025.075.025.225l-.1 1.075q-.05.3-.337.413-.288.112-.513-.113l-.8-.775-.125-.175ZM12 11q-1.25 0-2.125-.875T9 8q0-.975.562-1.738Q10.125 5.5 11 5.2V4q0-.425.288-.713Q11.575 3 12 3t.713.287Q13 3.575 13 4v1.2q.875.3 1.438 1.062Q15 7.025 15 8q0 1.25-.875 2.125T12 11Zm0-2q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialArchitectureFilled.displayName = 'AmauiIconMaterialArchitectureFilled';

export default IconMaterialArchitectureFilled;
