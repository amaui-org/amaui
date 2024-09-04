import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorgW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorgW100Filled'

      short_name='Borg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-140 214-287q-14-8-21-20.86-7-12.85-7-28.14v-130h169v82q0 12.75 8.63 21.37Q372.25-354 385-354h81v214ZM186-494v-130q0-15.29 7-28.14Q200-665 214-673l252-147v214h-81q-12.75 0-21.37 8.62Q355-588.75 355-576v82H186Zm197 112v-195h193v195H383Zm111 242v-214h80q12.75 0 21.38-8.63Q604-371.25 604-384v-82h170v130q0 15.4-7.35 28.35Q759.3-294.7 746-287L494-140Zm110-354v-82q0-12.75-8.62-21.38Q586.75-606 574-606h-80v-214l252 147q13.3 7.7 20.65 20.65Q774-639.4 774-624v130H604Z"/>
    </Icon>
  );
});

IconMaterialBorgW100Filled.displayName = 'AmauiIconMaterialBorgW100Filled';

export default IconMaterialBorgW100Filled;
