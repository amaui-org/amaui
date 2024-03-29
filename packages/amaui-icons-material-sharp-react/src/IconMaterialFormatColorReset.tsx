import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorReset = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorReset'

      short_name='FormatColorReset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.25 16.4-1.55-1.5q.15-.425.225-.863Q18 13.6 18 13.1q0-1.175-.438-2.225Q17.125 9.825 16.25 9L12 4.8 9.8 6.95l-1.4-1.4L12 2l5.65 5.55q1.1 1.05 1.725 2.487Q20 11.475 20 13.1q0 .9-.2 1.725-.2.825-.55 1.575Zm.55 6.2-3.1-3.1q-1.025.725-2.2 1.113Q13.325 21 12 21q-3.325 0-5.662-2.312Q4 16.375 4 13.1q0-1.275.4-2.45.4-1.175 1.2-2.25L1.4 4.2l1.4-1.4 18.4 18.4ZM12 19q.9 0 1.713-.25.812-.25 1.537-.7L7 9.85q-.525.8-.762 1.6Q6 12.25 6 13.1q0 2.45 1.75 4.175Q9.5 19 12 19Zm-.925-5.1Zm2.75-2.9Z"/>
    </Icon>
  );
});

IconMaterialFormatColorReset.displayName = 'AmauiIconMaterialFormatColorReset';

export default IconMaterialFormatColorReset;
