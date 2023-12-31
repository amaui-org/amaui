import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrPlusOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusOffW100Filled'

      short_name='HdrPlusOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M564-524h92v-152h-92v152ZM324-324h112v-72H324v72Zm-28 108h28v-80h66l35 80h31l-36-82h30l14-14v-98l-14-14H296v208Zm0-280h28v-120l-28-28v148Zm184 364q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-78 28.5-140T233-727l494 494q-48 48-113 74.5T480-132Zm376 68L64-856l20-20L876-84l-20 20Zm-80-234L578-496h92l14-14v-180l-14-14H536v166l-72-72v-94h-28v66L298-776q44-26 85-39t97-13q72 0 135.5 27.5T726-726q47 47 74.5 110.5T828-480q0 47-11.5 92T776-298Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusOffW100Filled.displayName = 'AmauiIconMaterialHdrPlusOffW100Filled';

export default IconMaterialHdrPlusOffW100Filled;
