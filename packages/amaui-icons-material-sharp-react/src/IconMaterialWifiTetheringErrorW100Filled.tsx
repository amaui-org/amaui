import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiTetheringErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiTetheringErrorW100Filled'

      short_name='WifiTetheringError'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.6 19.325q-1.275-1.2-2-2.825-.725-1.625-.725-3.5 0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863q1.587-.687 3.387-.687 2.225 0 4.075 1.012Q18.5 6.325 19.7 8h-.875Q17.7 6.625 16.087 5.812 14.475 5 12.575 5 9.225 5 6.9 7.325 4.575 9.65 4.575 13q0 1.725.675 3.225t1.85 2.6ZM9.425 16.5q-.725-.65-1.137-1.55-.413-.9-.413-1.95 0-1.95 1.375-3.325Q10.625 8.3 12.575 8.3q1.95 0 3.325 1.375Q17.275 11.05 17.275 13q0 1.05-.412 1.95-.413.9-1.138 1.55l-.5-.5q.625-.575.987-1.35.363-.775.363-1.65 0-1.65-1.175-2.825Q14.225 9 12.575 9q-1.65 0-2.825 1.175Q8.575 11.35 8.575 13q0 .9.363 1.662.362.763.987 1.338Zm3.15-2.8q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.487.212q.213.213.213.488t-.213.487q-.212.213-.487.213Zm7.05 4.65q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.362.15-.138.35-.138.225 0 .363.138.137.137.137.362 0 .2-.137.35-.138.15-.363.15Zm-.35-2.65V10h.7v5.7Z"/>
    </Icon>
  );
});

IconMaterialWifiTetheringErrorW100Filled.displayName = 'AmauiIconMaterialWifiTetheringErrorW100Filled';

export default IconMaterialWifiTetheringErrorW100Filled;
