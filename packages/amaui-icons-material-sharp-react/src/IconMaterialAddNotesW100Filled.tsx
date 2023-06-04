import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddNotesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddNotesW100Filled'

      short_name='AddNotes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 21h.7v-2.5h2.5v-.7h-2.5v-2.5h-.7v2.5h-2.5v.7h2.5Zm.35.85q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85ZM7.65 8.65h8.7v-.7h-8.7Zm3.825 11.05H5.8q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v5.725q-.425-.1-.85-.163-.425-.062-.85-.062-.575 0-1.125.1t-1.075.275v-.025H7.65v.7h6.725q-.85.55-1.488 1.312-.637.763-1.037 1.688h-4.2v.7h3.925q-.125.475-.2.962-.075.488-.075.988 0 .35.025.85t.15.85Z"/>
    </Icon>
  );
});

IconMaterialAddNotesW100Filled.displayName = 'AmauiIconMaterialAddNotesW100Filled';

export default IconMaterialAddNotesW100Filled;
