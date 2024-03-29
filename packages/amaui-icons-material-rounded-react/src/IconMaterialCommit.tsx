import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Commit'

      short_name='Commit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q-1.825 0-3.188-1.137Q7.45 14.725 7.1 13H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h4.1q.35-1.725 1.712-2.863Q10.175 7 12 7q1.825 0 3.188 1.137Q16.55 9.275 16.9 11H21q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13h-4.1q-.35 1.725-1.712 2.863Q13.825 17 12 17Zm0-2q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"/>
    </Icon>
  );
});

IconMaterialCommit.displayName = 'AmauiIconMaterialCommit';

export default IconMaterialCommit;
