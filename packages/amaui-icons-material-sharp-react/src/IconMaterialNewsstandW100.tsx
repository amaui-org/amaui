import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewsstandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewsstandW100'

      short_name='Newsstand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M106-192v-28h748v28H106Zm98-148v-268h28v268h-28Zm148 0v-428h28v428h-28Zm148 0v-428h28v428h-28Zm244 0L610-574l24-14 134 234-24 14Z"/>
    </Icon>
  );
});

IconMaterialNewsstandW100.displayName = 'AmauiIconMaterialNewsstandW100';

export default IconMaterialNewsstandW100;
