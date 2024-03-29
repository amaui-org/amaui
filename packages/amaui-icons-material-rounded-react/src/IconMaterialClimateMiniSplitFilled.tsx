import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClimateMiniSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitFilled'

      short_name='ClimateMiniSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 12q-.825 0-1.412-.588Q2 10.825 2 10V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v6q0 .825-.587 1.412Q20.825 12 20 12h-2V8q0-.825-.587-1.412Q16.825 6 16 6H8q-.825 0-1.412.588Q6 7.175 6 8v4Zm4 0V8h8v4Zm-.025 2q.375 0 .662.225.288.225.288.575 0 1.725-1.162 2.962Q6.6 19 4.875 19q-.375 0-.625-.288-.25-.287-.25-.687 0-.4.238-.7.237-.3.612-.3.925 0 1.55-.663.625-.662.625-1.587 0-.35.287-.563Q7.6 14 7.975 14Zm7.975 0q-.375 0-.662.225Q15 14.45 15 14.8q0 1.725 1.163 2.962Q17.325 19 19.05 19q.375 0 .625-.288.25-.287.25-.687 0-.4-.237-.7-.238-.3-.613-.3-.925 0-1.55-.663-.625-.662-.625-1.587 0-.35-.287-.563Q16.325 14 15.95 14ZM12 20q-.425 0-.712-.288Q11 19.425 11 19v-4q0-.425.288-.713Q11.575 14 12 14t.713.287Q13 14.575 13 15v4q0 .425-.287.712Q12.425 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplitFilled.displayName = 'AmauiIconMaterialClimateMiniSplitFilled';

export default IconMaterialClimateMiniSplitFilled;
