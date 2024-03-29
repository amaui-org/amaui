import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Badge'

      short_name='Badge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13.5h4V12h-4Zm0 3h4V15h-4ZM15 7h7v15H2V7h7V2h6Zm-4 2h2V4h-2Zm1 5.5ZM9 15q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q9.625 12 9 12t-1.062.438Q7.5 12.875 7.5 13.5t.438 1.062Q8.375 15 9 15Zm-3 3h6v-.45q0-.425-.238-.788-.237-.362-.662-.562-.5-.225-1.012-.337Q9.575 15.75 9 15.75q-.575 0-1.087.113-.513.112-1.013.337-.425.2-.662.562Q6 17.125 6 17.55Zm3-9H4v11h16V9h-5v2H9Z"/>
    </Icon>
  );
});

IconMaterialBadge.displayName = 'AmauiIconMaterialBadge';

export default IconMaterialBadge;
