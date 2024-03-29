import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFindReplaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplaceFilled'

      short_name='FindReplace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.375 10q-.55 0-.85-.363-.3-.362-.15-.862.675-2.1 2.475-3.437Q8.65 4 11 4q1.475 0 2.763.562Q15.05 5.125 16 6.1V5q0-.425.288-.713Q16.575 4 17 4t.712.287Q18 4.575 18 5v4q0 .425-.288.712Q17.425 10 17 10h-4q-.425 0-.712-.288Q12 9.425 12 9t.288-.713Q12.575 8 13 8h2q-.725-.9-1.738-1.45Q12.25 6 11 6q-1.625 0-2.925.925-1.3.925-1.8 2.4-.1.3-.35.487-.25.188-.55.188ZM18.9 20.3l-3.7-3.7q-.9.675-1.962 1.037Q12.175 18 11 18q-1.475 0-2.762-.562Q6.95 16.875 6 15.9V17q0 .425-.287.712Q5.425 18 5 18t-.713-.288Q4 17.425 4 17v-4q0-.425.287-.713Q4.575 12 5 12h4q.425 0 .713.287.287.288.287.713t-.287.712Q9.425 14 9 14H7q.725.9 1.738 1.45Q9.75 16 11 16q1.625 0 2.925-.925 1.3-.925 1.8-2.4.1-.3.35-.487.25-.188.55-.188.55 0 .85.375.3.375.15.875-.175.525-.425 1.012-.25.488-.6.938l3.7 3.7q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialFindReplaceFilled.displayName = 'AmauiIconMaterialFindReplaceFilled';

export default IconMaterialFindReplaceFilled;
