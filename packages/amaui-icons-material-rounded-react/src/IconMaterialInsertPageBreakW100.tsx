import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertPageBreakW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreakW100'

      short_name='InsertPageBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.625 0-1.062-.438Q5.3 19.825 5.3 19.2v-2.85H6v2.85q0 .35.225.575Q6.45 20 6.8 20h10.4q.35 0 .575-.225Q18 19.55 18 19.2v-2.85h.7v2.85q0 .625-.438 1.062-.437.438-1.062.438Zm-1.5-9.05V4.8q0-.625.438-1.063Q6.175 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588v3.675H18V7.7h-2.95q-.325 0-.537-.213-.213-.212-.213-.537V4H6.8q-.35 0-.575.225Q6 4.45 6 4.8v6.85Zm4.3 2.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7.5 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-15 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm9.9-2.7Zm0 4.7Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreakW100.displayName = 'AmauiIconMaterialInsertPageBreakW100';

export default IconMaterialInsertPageBreakW100;
