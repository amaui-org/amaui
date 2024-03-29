import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeselect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Deselect'

      short_name='Deselect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 13v-2h2v2Zm4 8v-2h2v2Zm4-16V3h2v2Zm8 0V3q.825 0 1.413.587Q21 4.175 21 5ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19h2Zm-2-4v-2h2v2Zm8 4v-2h2v2Zm8-8v-2h2v2Zm0-4V7h2v2Zm-4-4V3h2v2ZM9 3v2H7.825L7 4.175V3Zm12 12v2h-1.175L19 16.175V15ZM9 15h3.175L9 11.825Zm6 6v-2h2v2Zm2-6.825-2-2V9h-3.175l-2-2H16q.425 0 .712.287Q17 7.575 17 8ZM3 9V7h2v2Zm16.075 12.9-4.9-4.9H8q-.425 0-.713-.288Q7 16.425 7 16V9.825l-4.9-4.9q-.275-.275-.275-.688 0-.412.275-.712.3-.3.712-.3.413 0 .713.3L20.5 20.5q.3.3.288.7-.013.4-.313.7-.3.275-.7.288-.4.012-.7-.288Z"/>
    </Icon>
  );
});

IconMaterialDeselect.displayName = 'AmauiIconMaterialDeselect';

export default IconMaterialDeselect;
