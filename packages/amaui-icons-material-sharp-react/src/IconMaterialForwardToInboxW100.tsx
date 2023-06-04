import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardToInboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxW100'

      short_name='ForwardToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 11.85-8-5.3V18h9.65v.7H3.3V5.3h17.4v8.35H20v-7.1Zm0-.85 7.6-5H4.4Zm6.5 10.425-.475-.475 2.2-2.25H15.15V18h5.1L18 15.75l.5-.475 3.075 3.075ZM4 6.55V18.575 13.65v.2V6Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxW100.displayName = 'AmauiIconMaterialForwardToInboxW100';

export default IconMaterialForwardToInboxW100;
