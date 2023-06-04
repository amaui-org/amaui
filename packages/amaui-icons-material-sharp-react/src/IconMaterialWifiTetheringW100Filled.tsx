import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiTetheringW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiTetheringW100Filled'

      short_name='WifiTethering'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13.7q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-3.15 2.8q-.725-.65-1.137-1.55Q7.3 14.05 7.3 13q0-1.95 1.375-3.325Q10.05 8.3 12 8.3q1.95 0 3.325 1.375Q16.7 11.05 16.7 13q0 1.05-.412 1.95-.413.9-1.138 1.55l-.5-.5q.625-.575.987-1.35Q16 13.875 16 13q0-1.65-1.175-2.825Q13.65 9 12 9q-1.65 0-2.825 1.175Q8 11.35 8 13q0 .9.363 1.662.362.763.987 1.338Zm-2.825 2.825q-1.275-1.2-2-2.825Q3.3 14.875 3.3 13q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863Q10.2 4.3 12 4.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 11.2 20.7 13q0 1.875-.725 3.5t-2 2.825l-.475-.5q1.15-1.1 1.825-2.6T20 13q0-3.35-2.325-5.675Q15.35 5 12 5 8.65 5 6.325 7.325 4 9.65 4 13q0 1.725.675 3.225t1.85 2.6Z"/>
    </Icon>
  );
});

IconMaterialWifiTetheringW100Filled.displayName = 'AmauiIconMaterialWifiTetheringW100Filled';

export default IconMaterialWifiTetheringW100Filled;
