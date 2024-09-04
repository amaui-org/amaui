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
      <path d="M466-140 186-303v-163h169v112.09h111V-140ZM186-494v-163l280-163v213.91H355V-494H186Zm197 112v-195h193v195H383Zm111 242v-213.91h110V-466h170v163L494-140Zm110-354v-112.09H494V-820l280 163v163H604Z"/>
    </Icon>
  );
});

IconMaterialBorgW100Filled.displayName = 'AmauiIconMaterialBorgW100Filled';

export default IconMaterialBorgW100Filled;
