import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChecklist = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Checklist'

      short_name='Checklist'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 9q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h7q.425 0 .712.287Q22 7.575 22 8t-.288.712Q21.425 9 21 9Zm0 8q-.425 0-.712-.288Q13 16.425 13 16t.288-.713Q13.575 15 14 15h7q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 17 21 17Zm-9.15-6.7L2.7 8.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.425 1.425 3.55-3.55q.3-.3.7-.288.4.013.7.313.275.3.275.7 0 .4-.275.7L6.25 10.3q-.3.3-.7.3-.4 0-.7-.3Zm0 8L2.7 16.15q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.425 1.425 3.55-3.55q.3-.3.7-.288.4.013.7.313.275.3.275.7 0 .4-.275.7L6.25 18.3q-.3.3-.7.3-.4 0-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialChecklist.displayName = 'AmauiIconMaterialChecklist';

export default IconMaterialChecklist;
