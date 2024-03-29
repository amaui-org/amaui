import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChecklistRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChecklistRtlFilled'

      short_name='ChecklistRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 9q-.425 0-.712-.288Q2 8.425 2 8t.288-.713Q2.575 7 3 7h7q.425 0 .713.287Q11 7.575 11 8t-.287.712Q10.425 9 10 9Zm0 8q-.425 0-.712-.288Q2 16.425 2 16t.288-.713Q2.575 15 3 15h7q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 17 10 17Zm12.675-6.7-2.15-2.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.425 1.425 3.55-3.55q.3-.3.7-.288.4.013.7.313.275.3.275.7 0 .4-.275.7l-4.225 4.25q-.3.3-.7.3-.4 0-.7-.3Zm0 8-2.15-2.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.425 1.425 3.55-3.55q.3-.3.7-.288.4.013.7.313.275.3.275.7 0 .4-.275.7l-4.225 4.25q-.3.3-.7.3-.4 0-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialChecklistRtlFilled.displayName = 'AmauiIconMaterialChecklistRtlFilled';

export default IconMaterialChecklistRtlFilled;
