import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDangerous = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dangerous'

      short_name='Dangerous'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.075 21q-.4 0-.763-.15-.362-.15-.637-.425l-4.1-4.1q-.275-.275-.425-.637-.15-.363-.15-.763v-5.85q0-.4.15-.763.15-.362.425-.637l4.1-4.1q.275-.275.637-.425.363-.15.763-.15h5.85q.4 0 .763.15.362.15.637.425l4.1 4.1q.275.275.425.637.15.363.15.763v5.85q0 .4-.15.763-.15.362-.425.637l-4.1 4.1q-.275.275-.637.425-.363.15-.763.15ZM12 13.4l2.175 2.175q.275.275.675.275t.7-.3q.275-.275.275-.7 0-.425-.275-.7L13.4 12l2.175-2.175q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275-.425 0-.7.275L12 10.6 9.825 8.425Q9.55 8.15 9.15 8.15t-.7.3q-.275.275-.275.7 0 .425.275.7L10.6 12l-2.175 2.175q-.275.275-.275.675t.3.7q.275.275.7.275.425 0 .7-.275ZM9.1 19h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8Zm2.9-7Z"/>
    </Icon>
  );
});

IconMaterialDangerous.displayName = 'AmauiIconMaterialDangerous';

export default IconMaterialDangerous;
