import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrafficJamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrafficJamW100'

      short_name='TrafficJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-132H92v-308l86.3-205H558l86 205.2V-132h-28v-75H120v75Zm14-335h468l-63-150H197l-63 150Zm-14 232h496v-204H120v204Zm103.24-62q16.76 0 28.26-11t11.5-28.06q0-17.06-11.74-29Q239.53-377 222.76-377q-16.76 0-28.26 11.94t-11.5 29Q183-319 194.74-308q11.73 11 28.5 11Zm290 0q16.76 0 28.26-11t11.5-28.06q0-17.06-11.74-29Q529.53-377 512.76-377q-16.76 0-28.26 11.94t-11.5 29Q473-319 484.74-308q11.73 11 28.5 11ZM720-244v-302l-75-179H278l12-28h373.19L748-552v308h-28Zm108-112v-302l-74-175H391l12-28h370l83 198v307h-28Zm-460 19Z"/>
    </Icon>
  );
});

IconMaterialTrafficJamW100.displayName = 'AmauiIconMaterialTrafficJamW100';

export default IconMaterialTrafficJamW100;
