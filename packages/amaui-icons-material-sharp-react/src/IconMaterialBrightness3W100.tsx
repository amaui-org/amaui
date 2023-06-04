import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness3W100'

      short_name='Brightness3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.275 19.725q2.65-.7 4.313-2.85Q17.25 14.725 17.25 12t-1.662-4.875q-1.663-2.15-4.313-2.85Q12.85 5.8 13.663 7.8q.812 2 .812 4.2t-.812 4.2q-.813 2-2.388 3.525ZM9.25 20.7H8.9q2.275-1.375 3.575-3.688 1.3-2.312 1.3-5.012 0-2.7-1.3-5.013Q11.175 4.675 8.9 3.3h.35q1.8 0 3.388.687 1.587.688 2.762 1.863t1.862 2.762Q17.95 10.2 17.95 12q0 1.8-.688 3.387-.687 1.588-1.862 2.763-1.175 1.175-2.762 1.862-1.588.688-3.388.688Zm5.225-8.7Z"/>
    </Icon>
  );
});

IconMaterialBrightness3W100.displayName = 'AmauiIconMaterialBrightness3W100';

export default IconMaterialBrightness3W100;
