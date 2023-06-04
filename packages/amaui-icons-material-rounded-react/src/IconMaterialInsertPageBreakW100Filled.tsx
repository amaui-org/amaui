import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInsertPageBreakW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreakW100Filled'

      short_name='InsertPageBreak'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.625 0-1.062-.438Q5.3 19.825 5.3 19.2v-2.85h13.4v2.85q0 .625-.438 1.062-.437.438-1.062.438Zm8.25-13H18L14.3 4v2.95q0 .325.213.537.212.213.537.213ZM9.6 14.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7.5 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-15 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3.2-2.7V4.8q0-.625.438-1.063Q6.175 3.3 6.8 3.3h7.225q.3 0 .588.125.287.125.487.325l3.15 3.15q.2.2.325.487.125.288.125.588v3.675Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreakW100Filled.displayName = 'AmauiIconMaterialInsertPageBreakW100Filled';

export default IconMaterialInsertPageBreakW100Filled;
