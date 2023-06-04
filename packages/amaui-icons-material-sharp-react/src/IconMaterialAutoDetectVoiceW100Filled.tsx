import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoDetectVoiceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDetectVoiceW100Filled'

      short_name='AutoDetectVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.3 9.4-.75-1.65L3.9 7l1.65-.75.75-1.65.75 1.65L8.7 7l-1.65.75Zm11.05-3-.425-.975-.95-.425.95-.425.425-.975.45.975.95.425-.95.425Zm1.4 4-.425-.975L17.35 9l.975-.425.425-.975.425.975.95.425-.95.425ZM12 13.7q-.725 0-1.212-.488Q10.3 12.725 10.3 12V6q0-.725.488-1.213Q11.275 4.3 12 4.3t1.213.487Q13.7 5.275 13.7 6v6q0 .725-.487 1.212-.488.488-1.213.488Zm-.35 7.65V17.7q-2.275-.175-3.812-1.8Q6.3 14.275 6.3 12H7q0 2.075 1.463 3.537Q9.925 17 12 17t3.538-1.463Q17 14.075 17 12h.7q0 2.275-1.537 3.9-1.538 1.625-3.813 1.8v3.65Z"/>
    </Icon>
  );
});

IconMaterialAutoDetectVoiceW100Filled.displayName = 'AmauiIconMaterialAutoDetectVoiceW100Filled';

export default IconMaterialAutoDetectVoiceW100Filled;
