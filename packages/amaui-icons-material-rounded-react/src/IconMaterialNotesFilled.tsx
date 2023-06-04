import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotesFilled'

      short_name='Notes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm0 5q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h10q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 18 14 18ZM4 8q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"/>
    </Icon>
  );
});

IconMaterialNotesFilled.displayName = 'AmauiIconMaterialNotesFilled';

export default IconMaterialNotesFilled;
