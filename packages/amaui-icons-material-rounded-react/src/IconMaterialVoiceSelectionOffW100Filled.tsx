import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVoiceSelectionOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VoiceSelectionOffW100Filled'

      short_name='VoiceSelectionOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M714-596q4-4 9.5-4t9.5 4q43 47 66 105t23 122q0 23-3 44.5t-9 43.5q-2 5-7 8.5t-10 1.5q-5-2-8.5-7.5T783-289q20-77 2-152.5T713-576q-4-5-3.5-10.5t4.5-9.5ZM400-769q-2-5-.5-11t6.5-8q5-2 11 0t8 7l88 183q2 5 0 11t-7 8q-5 2-11 0t-8-7l-87-183ZM212-354v-20q0-13 8.5-21.5T242-404h98q14 0 23-9t9-23v-48q0-13 8.5-21.5T402-514h44l28 28h-74v56q0 23-15.5 38.5T346-376H240v24q0 37 25.5 63.5T328-253l12 3q29 8 30.5 42T339-162q-47 17-95.5 23t-97.5 7q-6 0-10-4t-4-10q0-6 4-10t10-4q47-1 93-6.5t91-22.5q12-5 11-18.5T323-225q-48-11-79.5-46T212-354ZM842-78 100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialVoiceSelectionOffW100Filled.displayName = 'AmauiIconMaterialVoiceSelectionOffW100Filled';

export default IconMaterialVoiceSelectionOffW100Filled;
